import React, { useState } from "react";

const Matrix = () => {
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [colorsArr, setColorsArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [array, setArray] = useState([]);

  const handleClick = (row, col) => {
    const newColorArr = [...colorsArr.map((row) => [...row])];
    newColorArr[row][col] =
      colorsArr[row][col] === "" || "orange" ? "green" : "";
    setColorsArr(newColorArr);

    let newArr = [...array];
    let subArr = [row, col];

    const containsSubArr = array.some((item) =>
      item.every((val, index) => val === subArr[index])
    );

    if (!containsSubArr) {
      newArr.push(subArr);
    }
    setArray(newArr);
  };
  const handleLastClick = () => {
    const newColorArr = [...colorsArr.map((row) => [...row])];
    newColorArr.forEach((row, i) => {
      row.forEach((cell, j) => {
        newColorArr[i][j] = "orange";
        setArray([]);
      });
    });
    setColorsArr(newColorArr);
  };
  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <button
              key={j}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: `${colorsArr[i][j]}`,
              }}
              onClick={() =>{
                if(array.length===8){
                    handleLastClick()
                }else{
                    handleClick(i,j)
                }
              }}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
