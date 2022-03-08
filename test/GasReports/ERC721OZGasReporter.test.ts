import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Open Zeppelin ERC721 Gas Usage", () => {
  let erc721oz: Contract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [owner, addr1] = await ethers.getSigners();
    const ERC721OZ = await ethers.getContractFactory("ERC721OZGasReporter");
    erc721oz = await ERC721OZ.deploy("Certificate", "CERT");
    await erc721oz.deployed();
  });

  //sanity check
  describe("Init", async () => {
    it("should initialize", async () => {
      expect(erc721oz).to.be.ok;
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
        await erc721oz.mintOne(addr1.address);
      }
    });
  });

  describe("safeMintOne", function () {
    it("runs safeMintOne 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721oz.safeMintOne(addr1.address);
      }
    });
  });

  describe("mintTen", function () {
    it("runs mintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721oz.mintTen(addr1.address);
      }
    });
  });

  describe("safeMintTen", function () {
    it("runs safeMintTen 50 times", async function () {
      for (let i = 0; i < 50; i++) {
        await erc721oz.safeMintTen(addr1.address);
      }
    });
  });
});
