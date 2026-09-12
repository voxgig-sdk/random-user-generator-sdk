import { Context } from './Context';
declare class RandomUserGeneratorError extends Error {
    isRandomUserGeneratorError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RandomUserGeneratorError };
