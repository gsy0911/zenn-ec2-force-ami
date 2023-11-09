# zenn-ec2-force-ami

[![cdk-version](https://img.shields.io/badge/aws_cdk-2.70.0-green.svg)](https://formulae.brew.sh/formula/aws-cdk)
[![NodeVersion](https://img.shields.io/badge/node-18.15.0-blue.svg)](https://nodejs.org/ja/)

# (optional) prepare local machine

install `Session Manager plugin` from [here](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html).

# deploy step

## 1. create `infrastructure/params` from example-file

```shell
$ cd infrastructure
$ cp params.example.ts params.ts
```

## 2. edit `params.ts`

- before

```typescript
import {IEc2Ssm} from './Ec2SsmStack';
import {
  Environment
} from 'aws-cdk-lib';

export const env: Environment = {
  account: "000011112222",
  region: "ap-northeast-1"
}

export const paramsEc2Ssm: IEc2Ssm = {
  applicationSuffix: "zenn-example",
  vpcId: "vpc-{your-vpc-id}",
}
```

- after
```typescript
import {IEc2Ssm} from './Ec2SsmStack';
import {
  Environment
} from 'aws-cdk-lib';

export const env: Environment = {
  account: "333344445555",
  region: "ap-northeast-1"
}

export const paramsEc2Ssm: IEc2Ssm = {
  applicationSuffix: "zenn-example",
  vpcId: "vpc-edited",
}
```

## 3. deploy

```shell
$ cdk deploy
```

# usage

Login EC2

```shell
# after deploy
$ EC2_INSTANCE_ID={...}
$ aws ssm start-session --target $EC2_INSTANCE_ID
```

Login as `ec2-user`

```shell
# shell at EC2
sh-4.2$ sudo su --login ec2-user

[ec2-user@ip-0-0-0-0 ~]$ whoami
ec2-user
```

# References

- [Amazon EC2でCentOS 6.4のAMIを自前で作る方法](https://www.ryuzee.com/contents/blog/6513)
- [EC2にEBSボリュームを新しくアタッチする](https://dev.classmethod.jp/articles/attach-ebs-to-ec2/)