import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function deploy() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();
  return counter;
}

async function getCount(count: any) {
  await count.count();
  console.log("Counter", await count.getCounter());
}

deploy().then(getCount);
