import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg italic leading-relaxed">"{quote}"</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}
