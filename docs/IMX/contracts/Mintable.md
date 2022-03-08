# Mintable









## Methods

### blueprints

```solidity
function blueprints(uint256) external view returns (bytes)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes | undefined |

### imx

```solidity
function imx() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### mintFor

```solidity
function mintFor(address user, uint256 quantity, bytes mintingBlob) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user | address | undefined |
| quantity | uint256 | undefined |
| mintingBlob | bytes | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |



## Events

### AssetMinted

```solidity
event AssetMinted(address to, uint256 id, bytes blueprint)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| id  | uint256 | undefined |
| blueprint  | bytes | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |



