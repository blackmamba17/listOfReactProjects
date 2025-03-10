import React, { FC } from "react";

export const Button: FC<{ buttonText: string }> = ({ buttonText }) => <button className="btn" style={{width:""}}>{ buttonText}</button>