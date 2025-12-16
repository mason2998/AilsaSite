import React from 'react';

interface ProjectCardProps {
  name: string;
  category: string;
}

export default function ProjectCard({ name, category }: ProjectCardProps) {
  return (
    <div className="bg-[#fafbf8] rounded-2xl p-8 hover:shadow-lg transition z-1">
      <div className="bg-gradient-to-br from-[#d4eae0] to-[#a8d5ba] h-48 rounded-lg mb-6"></div>
      <h4 className="text-xl font-semibold text-[#2d3d36] mb-2">{name}</h4>
      <p className="text-[#7cc491] text-sm">{category}</p>
    </div>
  );
}
