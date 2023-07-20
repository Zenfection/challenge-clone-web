import type {Config} from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				color: {
					primary: "#4C4DDC",
					"primary-surface": "#F5F5FF",
					"primary-border": "#DFE0F3",
					"primary-hover": "#3334CC",
					"primary-pressed": "#085885",
					"primary-focus": "#DBDBF8",

					secondary: "#FFD33C",
					"secondary-surface": "#FFF6D8",
					"secondary-border": "#FFF0BE",
					"secondary-hover": "#D5B032",
					"secondary-pressed": "#806A1E",
					"secondary-focus": "#FFF6D8",

					success: "#50CD89",
					"success-surface": "#F2FFF8",
					"success-border": "#C5EED8",
					"success-hover": "#46B277",
					"success-pressed": "#28593F",
					"success-focus": "#DCF5E7",

					error: "#F14141",
					"error-surface": "#FFF2F2",
					"error-border": "#FAC0C0",
					"error-hover": "#D93A3A",
					"error-pressed": "#802A2A",
					"error-focus": "#FCD9D9",

					info: "#7239EA",
					"info-surface": "#F6F2FF",
					"info-border": "#D0BDF8",
					"info-hover": "#6633D1",
					"info-pressed": "#3F2478",
					"info-focus": "#E3D7FB"
				},
				spacing: {
					"1/2": "50%",
					"1/3": "33.333333%",
					"2/3": "66.666667%",
					"1/4": "25%",
					"2/4": "50%",
					"3/4": "75%",
					"1/5": "20%",
					"2/5": "40%",
					"3/5": "60%",
					"4/5": "80%",
					"1/6": "16.666667%",
					"2/6": "33.333333%",
					"3/6": "50%",
					"4/6": "66.666667%",
					"5/6": "83.333333%",
					"1/12": "8.333333%",
					"2/12": "16.666667%",
					"3/12": "25%",
					"4/12": "33.333333%",
					"5/12": "41.666667%",
					"6/12": "50%",
					"7/12": "58.333333%",
					"8/12": "66.666667%",
					"9/12": "75%",
					"10/12": "83.333333%",
					"11/12": "91.666667%"
				}
			}
		}
	}
};
