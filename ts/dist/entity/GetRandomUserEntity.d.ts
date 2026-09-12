import { RandomUserGeneratorEntityBase } from '../RandomUserGeneratorEntityBase';
import type { RandomUserGeneratorSDK } from '../RandomUserGeneratorSDK';
import type { Control } from '../types';
import type { GetRandomUser, GetRandomUserListMatch } from '../RandomUserGeneratorTypes';
declare class GetRandomUserEntity extends RandomUserGeneratorEntityBase<GetRandomUser> {
    constructor(client: RandomUserGeneratorSDK, entopts: any);
    make(this: GetRandomUserEntity): GetRandomUserEntity;
    list(this: any, reqmatch?: GetRandomUserListMatch, ctrl?: Control): Promise<GetRandomUserEntity[]>;
}
export { GetRandomUserEntity };
