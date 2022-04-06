import React from "react";
import { useParams } from "react-router-dom";

export default function Page2() {
  const {par1,par2} = useParams()
  console.log("par1 = "+par1 );
  console.log("par2 = "+par2 );

  return <div>Page2</div>;
}
