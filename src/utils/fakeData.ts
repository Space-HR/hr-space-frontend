import { PropOption } from "../types/formik-elements";

export const employeeExperienceOptions: PropOption[] = [
	{ id: 0, name: 'Без опыта' },
	{ id: 1, name: 'От 1 года до 3 лет' },
	{ id: 2, name: 'От 3 до 6 лет' },
	{ id: 3, name: 'Более 6 лет' },
];
export const employeeEducationOptions: PropOption[] = [
	{ id: 0, name: 'Высшее' },
	{ id: 1, name: 'Незаконченное высшее' },
	{ id: 2, name: 'Среднее' },
	{ id: 3, name: 'Среднее специальное' },
];

type TIsDelayedPublicationOptions = {
	id: number;
	booleanValue: boolean;
	label: string;
};

export const isDelayedPublicationOptions: TIsDelayedPublicationOptions[] = [
	{
		id: 0,
		booleanValue: false,
		label: 'Опубликовать сейчас',
	},
	{
		id: 1,
		booleanValue: true,
		label: 'Опубликовать по расписанию',
	},
];


export const recruiterTasksOptions: PropOption[] = [
	{ id: 0, name: 'Поиск и предоставление релевантных резюме' },
	{
		id: 1,
		name: 'Организация собеседований с заказчиком, синхронизация по времени соискателя и заказчика',
	},
	{ id: 2, name: 'Запрос рекомендаций с предыдущих мест работы' },
	{ id: 3, name: 'Отправка кандидату тестового задания' },
	{
		id: 4,
		name: 'Отправка кандидату анкеты службы безопасности вашей компании',
	},
	{ id: 5, name: 'Отправка финалисту приглашения на работу' },
];

type TPropRadioOption = {
	id: number;
	booleanValue: boolean;
	label: string;
};

export const resumeAfterInterviewOptions: TPropRadioOption[] = [
	{
		id: 0,
		booleanValue: false,
		label: 'Резюме без предварительного собеседования',
	},
	{
		id: 1,
		booleanValue: true,
		label:
			'Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату',
	},
];

type TtariffIdOption = {
	id: number;
	name: string;
	payment_for_employee_start_working: number;
	payment_for_employee_after_guarantee: number;
	guarantee_period: number;
	units_of_measurement_warranty_period: string;
	description: string;
};

export const tariffIdOptions: TtariffIdOption[] = [
	{
		id: 0,
		name: '100% за выход сотрудника',
		payment_for_employee_start_working: 100,
		payment_for_employee_after_guarantee: 0,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Отличный вариант, чтобы на заявку откликнулись «звездные» рекрутеры с опытом.',
	},
	{
		id: 1,
		name: '50% - после выхода, 50% - после гарантийного периода',
		payment_for_employee_start_working: 50,
		payment_for_employee_after_guarantee: 50,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Гарантийный период — испытательный срок. 1 месяц после выхода сотрудника.',
	},
	{
		id: 2,
		name: '100% - после гарантийного периода',
		payment_for_employee_start_working: 0,
		payment_for_employee_after_guarantee: 100,
		guarantee_period: 1,
		units_of_measurement_warranty_period: 'month',
		description:
			'Это 1 месяц после выхода сотрудника. Доступен выбор одного рекрутера.',
	},
];

export const scheduleOptions: PropOption[] = [
	{ id: 0, name: '5/2 пн – пт' },
	{ id: 1, name: 'Свободный' },
	{ id: 2, name: 'Сменный' },
	{ id: 3, name: 'Вахтовый' },
	{ id: 4, name: 'Другой' },
];

export const workFormatsOptions: PropOption[] = [
	{ id: 0, name: 'В офисе' },
	{ id: 1, name: 'Удаленно' },
	{ id: 2, name: 'Гибрид' },
];

export const registerAsSetOptions: PropOption[] = [
	{ id: 0, name: 'ТК РФ' },
	{ id: 1, name: 'Самозанятые' },
	{ id: 2, name: 'ИП' },
	{ id: 3, name: 'ГПХ' },
];

export const employeeCategoriesOptions: PropOption[] = [
	{ id: 0, name: 'Студентов' },
	{ id: 1, name: 'От 14 лет' },
	{ id: 2, name: 'От 16 лет' },
	{ id: 3, name: 'С нарушением здоровья' },
];