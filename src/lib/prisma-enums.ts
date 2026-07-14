export const ClassifiedStatus = {
	LIVE: "LIVE",
	DRAFT: "DRAFT",
	SOLD: "SOLD",
} as const;

export type ClassifiedStatus =
	(typeof ClassifiedStatus)[keyof typeof ClassifiedStatus];

export const CustomerStatus = {
	COLD: "COLD",
	CONTACTED: "CONTACTED",
	INTERESTED: "INTERESTED",
	PURCHASED: "PURCHASED",
	SUBSCRIBER: "SUBSCRIBER",
} as const;

export type CustomerStatus =
	(typeof CustomerStatus)[keyof typeof CustomerStatus];

export const CurrencyCode = {
	GBP: "GBP",
	EUR: "EUR",
	USD: "USD",
} as const;

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

export const OdoUnit = {
	MILES: "MILES",
	KILOMETERS: "KILOMETERS",
} as const;

export type OdoUnit = (typeof OdoUnit)[keyof typeof OdoUnit];

export const BodyType = {
	SEDAN: "SEDAN",
	HATCHBACK: "HATCHBACK",
	SUV: "SUV",
	COUPE: "COUPE",
	CONVERTIBLE: "CONVERTIBLE",
	WAGON: "WAGON",
} as const;

export type BodyType = (typeof BodyType)[keyof typeof BodyType];

export const Colour = {
	BLACK: "BLACK",
	BLUE: "BLUE",
	BROWN: "BROWN",
	GOLD: "GOLD",
	GREEN: "GREEN",
	GREY: "GREY",
	ORANGE: "ORANGE",
	PINK: "PINK",
	PURPLE: "PURPLE",
	RED: "RED",
	SILVER: "SILVER",
	WHITE: "WHITE",
	YELLOW: "YELLOW",
} as const;

export type Colour = (typeof Colour)[keyof typeof Colour];

export const FuelType = {
	PETROL: "PETROL",
	DIESEL: "DIESEL",
	ELECTRIC: "ELECTRIC",
	HYBRID: "HYBRID",
} as const;

export type FuelType = (typeof FuelType)[keyof typeof FuelType];

export const Transmission = {
	MANUAL: "MANUAL",
	AUTOMATIC: "AUTOMATIC",
} as const;

export type Transmission = (typeof Transmission)[keyof typeof Transmission];

export const ULEZCompliance = {
	EXEMPT: "EXEMPT",
	NON_EXEMPT: "NON_EXEMPT",
} as const;

export type ULEZCompliance =
	(typeof ULEZCompliance)[keyof typeof ULEZCompliance];
