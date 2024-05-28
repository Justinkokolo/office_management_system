import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            currentStep === index + 1 ? "bg-[#489DDA]" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
