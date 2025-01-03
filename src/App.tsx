import "./App.css";
import { Field } from "./components/field/field";
import { BaseForm } from "./components";
import { useBaseForm } from "./components/base-form";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email(),
});

const DEFAULT_VALUES = {
  email: "",
};

function App() {
  const formParams = useBaseForm({
    defaultValues: DEFAULT_VALUES,
    validationSchema,
  });

  return (
    <BaseForm
      params={formParams}
      onSubmit={(data) => {
        console.log("form data", data);
      }}
    >
      <Field name="email" label="Password" placeholder="Placeholder" />
      <button type="submit">SUBMIT</button>
    </BaseForm>
  );
}

export default App;
