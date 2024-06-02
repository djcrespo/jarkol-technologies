import products_es from "public/jarkol/products/products_es.json";
import products_en from "public/jarkol/products/products_en.json";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, currentLocale } from './ProductsGallery.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'AtomsContainer', typeof __VLS_localComponents, "AtomsContainer", "AtomsContainer", "AtomsContainer"> &
__VLS_WithComponent<'CardsProductCard', typeof __VLS_localComponents, "CardsProductCard", "CardsProductCard", "CardsProductCard">;
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_components.AtomsContainer; __VLS_components.AtomsContainer;
// @ts-ignore
[AtomsContainer, AtomsContainer,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.CardsProductCard;
// @ts-ignore
[CardsProductCard,];
{
const __VLS_0 = __VLS_intrinsicElements["section"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("lg:pt-5 lg:pb-20 md:pt-24 md:pb-24"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("lg:pt-5 lg:pb-20 md:pt-24 md:pb-24"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'AtomsContainer' extends keyof typeof __VLS_ctx ? { 'AtomsContainer': typeof __VLS_ctx.AtomsContainer; } : typeof __VLS_resolvedLocalAndGlobalComponents).AtomsContainer;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { AtomsContainer: typeof __VLS_5; }).AtomsContainer;
({} as { AtomsContainer: typeof __VLS_5; }).AtomsContainer;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("grid md:grid-cols-4 gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("grid md:grid-cols-4 gap-4"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
for (const [product, index] of __VLS_getVForSourceType(((__VLS_ctx.currentLocale = 'es' ? __VLS_ctx.products_es : __VLS_ctx.products_en))!)) {
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, key: ((index)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = ({} as 'CardsProductCard' extends keyof typeof __VLS_ctx ? { 'CardsProductCard': typeof __VLS_ctx.CardsProductCard; } : typeof __VLS_resolvedLocalAndGlobalComponents).CardsProductCard;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, image: ((("/jarkol/products/images/products_2/" + product.image))), title: ((product.title)), description: ((product.description)), points: ((product.points)), index: ((index)), }));
({} as { CardsProductCard: typeof __VLS_20; }).CardsProductCard;
const __VLS_22 = __VLS_21({ ...{}, image: ((("/jarkol/products/images/products_2/" + product.image))), title: ((product.title)), description: ((product.description)), points: ((product.points)), index: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, image: ((("/jarkol/products/images/products_2/" + product.image))), title: ((product.title)), description: ((product.description)), points: ((product.points)), index: ((index)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
// @ts-ignore
[currentLocale, products_es, products_en,];
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
