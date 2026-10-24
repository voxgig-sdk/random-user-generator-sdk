import { GetRandomUserEntity } from './entity/GetRandomUserEntity';
export type * from './RandomUserGeneratorTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RandomUserGeneratorEntityBase } from './RandomUserGeneratorEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class RandomUserGeneratorSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetRandomUser(entopts?: Record<string, any>): GetRandomUserEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RandomUserGeneratorSDK;
    tester(testopts?: any, sdkopts?: any): RandomUserGeneratorSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RandomUserGeneratorSDK;
export { stdutil, config, BaseFeature, RandomUserGeneratorEntityBase, RandomUserGeneratorSDK, SDK, };
export type { DirectResult };
