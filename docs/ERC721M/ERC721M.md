# ERC721M









## Methods

### approve

```solidity
function approve(address spender, uint256 id) external nonpayable
```

Gives permission to `to` to transfer `id` token to another account.

*The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `id` must exist. Emits an {Approval} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | The address of the spender to approve to. |
| id | uint256 | The token ID to approve. |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256 balance)
```

Returns the number of tokens in an account.

*O(totalSupply), it is discouraged to call this function from other contracts as it can become very expensive, especially with higher total collection sizes.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address to query. |

#### Returns

| Name | Type | Description |
|---|---|---|
| balance | uint256 | The balance. |

### getApproved

```solidity
function getApproved(uint256 id) external nonpayable returns (address)
```

Returns the account approved for a token ID.

*Requirements: - `id` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| id | uint256 | Token ID to query. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The account approved for `id` token. |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```

Returns if the `operator` is allowed to manage all of the assets of `owner`.



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address of the owner. |
| operator | address | The address of the operator. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | True if `operator` was approved by `owner`. |

### name

```solidity
function name() external view returns (string)
```

Returns the collection name.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | The collection name. |

### ownerOf

```solidity
function ownerOf(uint256 id) external view returns (address owner)
```

Returns the owner of a token ID.

*O(MAX_TX), gradually moves to O(1) as more tokens get transferred and the owners are explicitly set.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| id | uint256 | The token ID. |

#### Returns

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id) external nonpayable
```

Safely transfers `id` token from `from` to `to`.

*Requirements: - `to` cannot be the zero address. - `id` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {ERC721TokenReceiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | The address to transfer from. |
| to | address | The address to transfer to. |
| id | uint256 | The token ID to transfer. |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, bytes data) external nonpayable
```

Safely transfers `id` token from `from` to `to`.

*Requirements: - `to` cannot be the zero address. - `id` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {ERC721TokenReceiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event. Additionally passes `data` in the callback.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | The address to transfer from. |
| to | address | The address to transfer to. |
| id | uint256 | The token ID to transfer. |
| data | bytes | The calldata to pass in the {ERC721TokenReceiver-onERC721Received} callback. |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```

Approve or remove `operator` as an operator for the caller.

*Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Emits an {ApprovalForAll} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | The address of the operator to approve. |
| approved | bool | The status to set. |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```

Returns true if this contract implements an interface from its ID.

*See the corresponding [EIP section](https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified) to learn more about how these IDs are created.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | The implementation status. |

### symbol

```solidity
function symbol() external view returns (string)
```

Returns the collection symbol.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | The collection symbol. |

### tokenByIndex

```solidity
function tokenByIndex(uint256 index) external view returns (uint256)
```

Returns a token ID at a given `index` of all the tokens stored by the contract.

*Use along with {totalSupply} to enumerate all tokens.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | The index to query. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The token ID. |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)
```

Returns a token ID owned by `owner` at a given `index` of its token list.

*O(totalSupply), it is discouraged to call this function from other contracts as it can become very expensive, especially with higher total collection sizes.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | The address to query. |
| index | uint256 | The index to query. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The token ID. |

### tokenURI

```solidity
function tokenURI(uint256 id) external view returns (string)
```

Returns the Uniform Resource Identifier (URI) for `id` token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| id | uint256 | The token ID. |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | The URI. |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

Returns the total amount of tokens stored by the contract.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The token supply. |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 id) external nonpayable
```

Transfers `id` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.

*Requirements: - `to` cannot be the zero address. - `id` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | The address to transfer from. |
| to | address | The address to transfer to. |
| id | uint256 | The token ID to transfer. |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 indexed id)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| id `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed id)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id `indexed` | uint256 | undefined |



