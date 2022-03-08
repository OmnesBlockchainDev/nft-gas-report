// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import { ERC721 } from "@rari-capital/solmate/src/tokens/ERC721.sol";

import "@imtbl/imx-contracts/contracts/Mintable.sol";

contract ERC721IMXGasReporter is ERC721, Mintable {
    constructor(
        address _owner,
        string memory _name,
        string memory _symbol,
        address _imx
    ) ERC721(_name, _symbol) Mintable(_owner, _imx) {}

    function _mintFor(
        address user,
        uint256 id,
        bytes memory
    ) internal override {
        _safeMint(user, id);
    }

    function tokenURI(uint256) public pure virtual override returns (string memory) {}
}
