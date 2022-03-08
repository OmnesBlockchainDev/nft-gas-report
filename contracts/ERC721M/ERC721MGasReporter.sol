// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import { ERC721M } from "./ERC721M.sol";

contract ERC721MGasReporter is ERC721M {
    string public baseURI;

    constructor(string memory _name, string memory _symbol)
        payable
        ERC721M(_name, _symbol)
    {}

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "NONEXISTENT_TOKEN");
        string memory _baseURI = baseURI;
        return bytes(_baseURI).length == 0 ? "" : string(abi.encodePacked(_baseURI, toString(id)));
    }

    function safeMintOne(address to) public {
        _safeMint(to, 1);
    }

    function mintOne(address to) public {
        _mint(to, 1);
    }

    function safeMintTen(address to) public {
        _safeMint(to, 10);
    }

    function mintTen(address to) public {
        _mint(to, 10);
    }
}
