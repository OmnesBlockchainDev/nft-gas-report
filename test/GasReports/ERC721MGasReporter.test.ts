import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("ERC721M Gas Usage", () => {
  let erc721m: Contract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [owner, addr1] = await ethers.getSigners();
    const ERC721M = await ethers.getContractFactory("ERC721MGasReporter");
    erc721m = await ERC721M.deploy("Certificate", "CERT");
    await erc721m.deployed();
  });

  //sanity check
  describe("Init", async () => {
    it("should initialize", async () => {
      expect(erc721m).to.be.ok;
    });
  });

  describe("eth-gas-reporter workaround", () => {
    it("should kill time", done => {
      setTimeout(done, 2000);
    });
  });

  describe("mintOne", function () {
    it("runs mintOne 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721m.mintOne(addr1.address);
      }
    });
  });

  describe("safeMintOne", function () {
    it("runs safeMintOne 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721m.safeMintOne(addr1.address);
      }
    });
  });

  describe("mintTen", function () {
    it("runs mintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721m.mintTen(addr1.address);
      }
    });
  });

  describe("safeMintTen", function () {
    it("runs safeMintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721m.safeMintTen(addr1.address);
      }
    });
  });
});
