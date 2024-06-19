export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.method);
		if (request.method === 'GET') {
			return Response.json({
				message: 'You sent a GET request',
			});
		}
		return Response.json({
			message: "You didn't send a GET request.",
		});
	},
};
