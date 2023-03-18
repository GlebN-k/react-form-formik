import React, {useState} from "react";

const Checkbox = () => {
    const [checked, setChecked] = useState(true);
  
    return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label
        className="text-green-800 ml-4"
        htmlFor="checkbox"
        onClick={() => setChecked(!checked)}
      >
        Надіслати мені оновлення про академію
      </label>
    </div>
  );
};

export default Checkbox;
