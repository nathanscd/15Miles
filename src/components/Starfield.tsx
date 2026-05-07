import React from 'react';

const Starfield: React.FC = () => {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield__nebula starfield__nebula--1" />
      <div className="starfield__nebula starfield__nebula--2" />
      <div className="starfield__nebula starfield__nebula--3" />
      <div className="starfield__layer starfield__layer--sm" />
      <div className="starfield__layer starfield__layer--md" />
      <div className="starfield__layer starfield__layer--lg" />
      <div className="starfield__shoot" />
      <div className="starfield__shoot" />
    </div>
  );
};

export default Starfield;
