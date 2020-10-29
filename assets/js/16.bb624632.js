(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{391:function(e,t,a){"use strict";a.r(t);var o=a(27),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h2",{attrs:{id:"can-i-use-openapi-3-instead-of-openapi-2-formerly-swagger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-openapi-3-instead-of-openapi-2-formerly-swagger"}},[e._v("#")]),e._v(" Can I use OpenAPI 3 instead of OpenAPI 2 (formerly Swagger)?")]),e._v(" "),a("p",[e._v("Yes, set "),a("code",[e._v("spec.specVersion")]),e._v(" to "),a("code",[e._v("3")]),e._v(" in your "),a("code",[e._v("tsoa.json")]),e._v(" file. See more config options by looking at "),a("a",{attrs:{href:"https://github.com/lukeautry/tsoa/blob/master/src/config.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("the config type definition"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-to-ensure-no-additional-properties-come-in-at-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-ensure-no-additional-properties-come-in-at-runtime"}},[e._v("#")]),e._v(" How to ensure no additional properties come in at runtime")]),e._v(" "),a("p",[e._v("By default, OpenAPI allows for models to have "),a("a",{attrs:{href:"https://swagger.io/docs/specification/data-models/dictionaries/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("additionalProperties")]),a("OutboundLink")],1),e._v(". If you would like to ensure at runtime that the data has only the properties defined in your models, set the "),a("code",[e._v("noImplicitAdditionalProperties")]),e._v(" "),a("a",{attrs:{href:"https://github.com/lukeautry/tsoa/blob/master/src/config.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("config"),a("OutboundLink")],1),e._v(" option to either "),a("code",[e._v('"silently-remove-extras"')]),e._v(" or "),a("code",[e._v('"throw-on-extras"')]),e._v(".\nCaveats:")]),e._v(" "),a("ul",[a("li",[e._v("The following types will always allow additional properties due to the nature of the way they work:\n"),a("ul",[a("li",[e._v("The "),a("code",[e._v("any")]),e._v(" type")]),e._v(" "),a("li",[e._v("An indexed type (which explicitly allows additional properties) like "),a("code",[e._v("export interface IStringToStringDictionary { [key: string] : string }")])])])]),e._v(" "),a("li",[e._v("If you are using tsoa for an existing service that has consumers...\n"),a("ul",[a("li",[e._v("you will need to inform your consumers before setting "),a("code",[e._v("noImplicitAdditionalProperties")]),e._v(" to "),a("code",[e._v('"throw-on-extras"')]),e._v(" since it would be a breaking change (due to the fact that request bodies that previously worked would now get an error).")])])]),e._v(" "),a("li",[e._v("Regardless, "),a("code",[e._v('"noImplicitAdditionalProperties" : "silently-remove-extras"')]),e._v(" is a great choice for both legacy AND new APIs (since this mirrors the behavior of C# serializers and other popular JSON serializers).")])]),e._v(" "),a("h2",{attrs:{id:"dealing-with-duplicate-model-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-duplicate-model-names"}},[e._v("#")]),e._v(" Dealing with duplicate model names")]),e._v(" "),a("p",[e._v("If you have multiple models with the same name, you may get errors indicating that there are multiple matching models. If you'd like to designate a class/interface as the 'canonical' version of a model, add a jsdoc element marking it as such:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n * @tsoaModel\n */")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyModel")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"how-can-i-get-the-most-from-my-oas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-get-the-most-from-my-oas"}},[e._v("#")]),e._v(" How can I get the most from my OAS?")]),e._v(" "),a("p",[e._v("Now that you have a OpenAPI Specification (OAS) (swagger.json), you can use all kinds of amazing tools that generate documentation, client SDKs, and more "),a("a",{attrs:{href:"http://openapi.tools//",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);