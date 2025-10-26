import { TextField, type TextFieldProps } from "@mui/material"
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form"

type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps

export default function TextInput<T extends FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({...props})
    return (
        <TextField 
            {...props}
            {...field}
            fullWidth
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
        />
    )
}