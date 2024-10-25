import * as Yup from "yup";

const taskSchema = Yup.object().shape({

    title: Yup.string().required("zorunlu alan"),
    description: Yup.string().required("zorunlu alan"),
    startDate: Yup.date().required("zorunlu alan"),
    endDate: Yup.date().required("zorunlu alan"),



})

export default taskSchema;
