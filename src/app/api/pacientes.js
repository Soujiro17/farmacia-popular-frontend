export const getPacientes = async ({ axiosInstance }) => {
    const { data } = await axiosInstance.get("/paciente/get-all-pacientes");
    return data;
  };
  
  export const addPaciente = async ({ axiosInstance, values }) => {
    const { data } = await axiosInstance.post("", values);
  
    return data;
  };
  