import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="space-y-4">
      <div className="w-12 h-12 bg-[#98153d] rounded-full flex items-center justify-center">
        {icon ?? null}
      </div>
      <h4 className="text-xl font-semibold text-[#2d3d36]">{title}</h4>
      <p className="text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}
