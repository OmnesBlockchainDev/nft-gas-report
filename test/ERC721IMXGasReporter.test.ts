import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("ERC721IMXGasReporter Gas Usage", () => {

  let mintable: Contract;
  let owner: SignerWithAddress;

  describe("eth-gas-reporter workaround", () => {
    it("should kill time", done => {
      setTimeout(done, 2000);
    });
  });

  describe("mintOne", function () {
    it("mints one", async function () {
      [owner] = await ethers.getSigners();
      const Asset = await ethers.getContractFactory("ERC721IMXGasReporter");

      const o = owner.address;
      const name = "Certificate";
      const symbol = "CERT";
      const imx = owner.address;
      mintable = await Asset.deploy(o, name, symbol, imx);
      const tokenID = "123";
      const blueprint = "";
      const blob = toHex(`{${tokenID}}:{${blueprint}}`);

      await mintable.mintFor(owner.address, 1, blob);

      const oo = await mintable.ownerOf(tokenID);
      expect(oo).to.equal(owner.address);
      const bp = await mintable.blueprints(tokenID);
      expect(fromHex(bp)).to.equal(blueprint);
    });
  });
});

function toHex(str: string) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return "0x" + result;
}

function fromHex(str1: string) {
  const hex = str1.toString().substr(2);
  let str = "";
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
