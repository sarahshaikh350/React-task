import { useState } from "react";

function ToggleText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button className="Button" onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && <p>This is the toggle text paragraph.</p>}
    </div>
  );
}

export default ToggleText;
