import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

const FormDemo = () => {
  // Local state to store the input from the user
  const [name, setName] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Reusable Card component wraps the form */}
      <Card title="User Form">
        {/* Custom Input component */}
        <Input
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Enter your name"
        />

        {/* Custom Button component */}
        <Button
          label="Submit"
          onClick={() => alert(`Hello, ${name}`)}
        />
      </Card>
    </div>
  );
};

export default FormDemo;
