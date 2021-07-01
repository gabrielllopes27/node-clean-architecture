export default class ExpressAdapter {
    static create(fn) {
        return async function (req, resp) {
            const obj = await fn(req.params, req.body);
            resp.json(obj);
        }
    }
}