import dotenv from "dotenv";

dotenv.config();

export const config = {
	link: "mongodb+srv://test123:test123@cluster0.xsuns.mongodb.net/test?retryWrites=true&w=majority",
	options: {
		useNewUrlParser: true,
		autoIndex: false,
		useUnifiedTopology: true,
	},
};
