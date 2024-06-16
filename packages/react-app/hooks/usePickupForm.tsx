import { PICKUP_ADDRESS_KEY, PICKUP_CONTAINER_AMOUNT_KEY, PICKUP_DATE_KEY, PICKUP_LGA_KEY, PICKUP_MATERIAL_AMOUNT_KEY, PICKUP_MATERIAL_KEY } from '@/constants/schedule';
import { useFormik } from 'formik';

export default function usePickupForm() {

    const formik = useFormik({
        initialValues: {
            [PICKUP_MATERIAL_AMOUNT_KEY]: '',
            [PICKUP_ADDRESS_KEY]: '',
            [PICKUP_CONTAINER_AMOUNT_KEY]: '',
            [PICKUP_DATE_KEY]: '',
            [PICKUP_LGA_KEY]: '',
            [PICKUP_MATERIAL_KEY]: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    });

    function getInputProps(id: keyof typeof formik.values) {
        return {
            ...formik.getFieldProps(id),
            ...formik.getFieldMeta(id),
        };
    }

    return Object.freeze({
        onSubmit: formik.handleSubmit,
        getInputProps,
        setValue: formik.setFieldValue,
        isValid: formik.isValid,
    });
}
