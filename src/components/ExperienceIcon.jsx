import React from 'react';
import { Briefcase, GraduationCap, Landmark } from 'lucide-react';

export const ExperienceIcon = ({ type }) => {
  const iconProps = { size: 18, className: "text-blue-400" };

  switch (type) {
    case 'briefcase':
      return <Briefcase {...iconProps} />;
    case 'graduation':
      return <GraduationCap {...iconProps} />;
    case 'landmark':
      return <Landmark {...iconProps} />;
    default:
      return <Briefcase {...iconProps} />;
  }
};

export default ExperienceIcon;