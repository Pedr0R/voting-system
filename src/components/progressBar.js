import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, remaining } = props;

  const containerStyles = {
    height: '45px',
    width: '650px',
    backgroundColor: "#7d0a0a",
    borderRadius: 50,
    margin: 50,
    display: 'flex'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 0,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '10px',
    marginRight: '10px',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
      <span style={labelStyles}>{`${remaining}%`}</span>
    </div>
  );
};

export default ProgressBar; 