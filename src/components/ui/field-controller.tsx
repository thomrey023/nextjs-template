import { CalendarDays } from 'lucide-react';
import { Matcher } from 'react-day-picker';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import 'react-phone-number-input/style.css';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface FieldControlInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  inputClassName?: string;
  fieldLabelClassName?: string;
  fieldDescriptionClassName?: string;
  fieldErrorClassName?: string;
}

export const FieldControlInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  inputClassName,
  fieldLabelClassName,
  fieldDescriptionClassName,
  fieldErrorClassName,
}: FieldControlInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="w-full relative" data-invalid={fieldState.invalid}>
          {label && label.length > 0 && (
            <FieldLabel className={fieldLabelClassName}>{label}</FieldLabel>
          )}
          {description && description.length > 0 && (
            <FieldDescription className={fieldDescriptionClassName}>{description}</FieldDescription>
          )}

          <Input className={inputClassName} placeholder={placeholder} {...field} />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className={fieldErrorClassName} />
          )}
        </Field>
      )}
    />
  );
};

interface FieldControlCalendarProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  calendarOpen: Record<number, boolean>;
  index: number;
  label?: string;
  description?: string;
  placeholder?: string;
  inputClassName?: string;
  fieldLabelClassName?: string;
  fieldDescriptionClassName?: string;
  inputGroupClassName?: string;
  startMonth?: Date;
  endMonth?: Date;
  disabled?: Matcher | Matcher[] | undefined;
  toggleCalendar: (index: number, type: 'dob' | 'passport') => void;
  calendarType?: 'dob' | 'passport' | undefined;
  align?: 'inline-start' | 'inline-end' | 'block-start' | 'block-end' | null | undefined;
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years' | undefined;
}

export const FieldControlCalendar = <T extends FieldValues>({
  control,
  name,
  calendarOpen,
  index,
  label,
  description,
  placeholder,
  inputClassName,
  fieldLabelClassName,
  fieldDescriptionClassName,
  inputGroupClassName,
  startMonth,
  endMonth,
  disabled,
  toggleCalendar,
  calendarType,
  align,
  captionLayout,
}: FieldControlCalendarProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && label.length > 0 && (
            <FieldLabel className={fieldLabelClassName}>{label}</FieldLabel>
          )}
          {description && description.length > 0 && (
            <FieldDescription className={fieldDescriptionClassName}>{description}</FieldDescription>
          )}
          <InputGroup className={inputGroupClassName}>
            <InputGroupInput
              value={field.value}
              placeholder={placeholder}
              className={cn(
                inputClassName,
                field.value && 'disabled:text-zinc-800 disabled:opacity-100',
              )}
              disabled
            />
            <InputGroupAddon align={align}>
              <Popover
                open={calendarOpen[index] || false}
                onOpenChange={() => {
                  if (!calendarType) return;
                  toggleCalendar(index, calendarType);
                }}
              >
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="hover:bg-transparent cursor-pointer">
                    <CalendarDays className="w-6! h-6.75! shrink-0 text-[#18181B]" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    captionLayout={captionLayout}
                    startMonth={startMonth}
                    endMonth={endMonth}
                    selected={field.value ? new Date(field.value) : undefined}
                    disabled={disabled}
                    onSelect={(date) => {
                      if (!date) return;
                      const year = date.getFullYear();
                      const month = String(date.getMonth() + 1).padStart(2, '0');
                      const day = String(date.getDate()).padStart(2, '0');
                      field.onChange(`${month}/${day}/${year}`);

                      if (calendarType) {
                        toggleCalendar(index, calendarType);
                      }
                    }}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
            </InputGroupAddon>
          </InputGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

interface FieldControlTextareaProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  inputClassName?: string;
  fieldLabelClassName?: string;
  fieldDescriptionClassName?: string;
  fieldErrorClassName?: string;
}

export const FieldControlTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder,
  inputClassName,
  fieldLabelClassName,
  fieldDescriptionClassName,
  fieldErrorClassName,
}: FieldControlTextareaProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="w-full relative" data-invalid={fieldState.invalid}>
          {label && label.length > 0 && (
            <FieldLabel className={fieldLabelClassName}>{label}</FieldLabel>
          )}
          {description && description.length > 0 && (
            <FieldDescription className={fieldDescriptionClassName}>{description}</FieldDescription>
          )}

          <Textarea className={inputClassName} placeholder={placeholder} rows={5} {...field} />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className={fieldErrorClassName} />
          )}
        </Field>
      )}
    />
  );
};
