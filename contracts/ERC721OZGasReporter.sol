// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ERC721OZGasReporter is ERC721Enumerable {
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}

    function safeMintOne(address to) public {
        uint256 _newId = totalSupply();
        _safeMint(to, _newId + 1);
    }

    function mintOne(address to) public {
        uint256 _newId = totalSupply();
        _mint(to, _newId + 1);
    }

    function safeMintTen(address to) public {
        uint256 _newId = totalSupply();

        for (uint256 i = 0; i <= 10; i++) {
            _safeMint(to, (_newId + i));
        }
    }

    function mintTen(address to) public {
        uint256 _newId = totalSupply();
        for (uint256 i = 0; i <= 10; i++) {
            _mint(to, (_newId + i));
        }
    }
}
