"use strict";
(() => {
var exports = {};
exports.id = 4739;
exports.ids = [4739,7174,2984];
exports.modules = {

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDbPool": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 9968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2984);






const CategorySpecsPage = ({ categories =[] , specs =[]  })=>{
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(specs);
    const { 0: filterCat , 1: setFilterCat  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: addingTo , 1: setAddingTo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null) // category id
    ;
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        spec_name: "",
        spec_label: "",
        display_order: 0,
        is_filterable: 1
    });
    const { 0: saving , 1: setSaving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const filteredItems = filterCat ? items.filter((s)=>String(s.category_id) === filterCat) : items;
    const groupedByCategory = {};
    filteredItems.forEach((spec)=>{
        const catId = spec.category_id;
        if (!groupedByCategory[catId]) groupedByCategory[catId] = [];
        groupedByCategory[catId].push(spec);
    });
    const getCategoryName = (catId)=>{
        const cat = categories.find((c)=>c.id === catId);
        return cat ? cat.name : `Category #${catId}`;
    };
    const startAdd = (catId)=>{
        setAddingTo(catId);
        setEditing(null);
        setForm({
            spec_name: "",
            spec_label: "",
            display_order: 0,
            is_filterable: 1
        });
    };
    const startEdit = (spec)=>{
        setEditing(spec.id);
        setAddingTo(null);
        setForm({
            spec_name: spec.spec_name,
            spec_label: spec.spec_label,
            display_order: spec.display_order || 0,
            is_filterable: spec.is_filterable ? 1 : 0
        });
    };
    const cancelForm = ()=>{
        setAddingTo(null);
        setEditing(null);
    };
    const generateSpecName = (label)=>label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const saveSpec = async ()=>{
        setSaving(true);
        try {
            if (editing) {
                const res = await fetch(`/api/admin/tables/category_specs/${editing}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        values: form
                    })
                });
                if (res.ok) {
                    setItems((prev)=>prev.map((s)=>s.id === editing ? Object.assign({}, s, form) : s));
                    cancelForm();
                }
            } else {
                const values = Object.assign({}, form, {
                    category_id: addingTo
                });
                const res1 = await fetch("/api/admin/tables/category_specs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        values
                    })
                });
                const data = await res1.json();
                if (data.success) {
                    setItems((prev)=>[
                            ...prev,
                            Object.assign({}, values, {
                                id: data.insertedId
                            })
                        ]);
                    cancelForm();
                }
            }
        } catch (e) {
            console.error(e);
        } finally{
            setSaving(false);
        }
    };
    const deleteSpec = async (id)=>{
        if (!window.confirm("Delete this specification field?")) return;
        try {
            await fetch(`/api/admin/tables/category_specs/${id}`, {
                method: "DELETE"
            });
            setItems((prev)=>prev.filter((s)=>s.id !== id));
        } catch (e) {
            console.error(e);
        }
    };
    // Get all categories that have specs
    const catsWithSpecs = [
        ...new Set(items.map((s)=>s.category_id))
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-edeeb54b70e0343a",
                    children: "Category Specs | Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-edeeb54b70e0343a" + " " + "specs-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "jsx-edeeb54b70e0343a" + " " + "specs-header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-edeeb54b70e0343a",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-edeeb54b70e0343a",
                                    children: "Category Specifications"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-edeeb54b70e0343a",
                                    children: "Manage specification fields for each product category."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-edeeb54b70e0343a" + " " + "filter-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "jsx-edeeb54b70e0343a" + " " + "filter-label",
                                children: "Filter by Category:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: filterCat,
                                onChange: (e)=>setFilterCat(e.target.value),
                                className: "jsx-edeeb54b70e0343a" + " " + "filter-select",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                        value: "",
                                        className: "jsx-edeeb54b70e0343a",
                                        children: [
                                            "All Categories (",
                                            items.length,
                                            " specs)"
                                        ]
                                    }),
                                    categories.filter((c)=>!c.parent_id).map((cat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                            value: cat.id,
                                            className: "jsx-edeeb54b70e0343a",
                                            children: [
                                                cat.name,
                                                " (",
                                                items.filter((s)=>s.category_id === cat.id).length,
                                                ")"
                                            ]
                                        }, cat.id))
                                ]
                            })
                        ]
                    }),
                    !addingTo && !editing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-edeeb54b70e0343a" + " " + "add-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "jsx-edeeb54b70e0343a",
                                children: "Add specs to a category:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-edeeb54b70e0343a" + " " + "add-cat-grid",
                                children: categories.filter((c)=>!c.parent_id).map((cat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>startAdd(cat.id),
                                        className: "jsx-edeeb54b70e0343a" + " " + "add-cat-btn",
                                        children: [
                                            "+ ",
                                            cat.name
                                        ]
                                    }, cat.id))
                            })
                        ]
                    }),
                    (addingTo || editing) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-edeeb54b70e0343a" + " " + "form-card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "jsx-edeeb54b70e0343a",
                                children: editing ? "Edit Specification" : `Add Spec to "${getCategoryName(addingTo)}"`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-edeeb54b70e0343a" + " " + "form-grid",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: "Spec Label (Display Name)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                value: form.spec_label,
                                                onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                            spec_label: e.target.value,
                                                            spec_name: editing ? p.spec_name : generateSpecName(e.target.value)
                                                        })),
                                                placeholder: "e.g. Processor Brand",
                                                className: "jsx-edeeb54b70e0343a"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: "Spec Name (Key)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                value: form.spec_name,
                                                onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                            spec_name: e.target.value
                                                        })),
                                                placeholder: "e.g. processor-brand",
                                                className: "jsx-edeeb54b70e0343a"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: "Order"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "number",
                                                value: form.display_order,
                                                onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                            display_order: Number(e.target.value)
                                                        })),
                                                className: "jsx-edeeb54b70e0343a"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: "Filterable"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                value: form.is_filterable,
                                                onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                            is_filterable: Number(e.target.value)
                                                        })),
                                                className: "jsx-edeeb54b70e0343a",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: 1,
                                                        className: "jsx-edeeb54b70e0343a",
                                                        children: "Yes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: 0,
                                                        className: "jsx-edeeb54b70e0343a",
                                                        children: "No"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-edeeb54b70e0343a" + " " + "form-actions",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: saveSpec,
                                        disabled: saving || !form.spec_label || !form.spec_name,
                                        className: "jsx-edeeb54b70e0343a" + " " + "btn-save",
                                        children: saving ? "Saving..." : editing ? "Update" : "Add Spec"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: cancelForm,
                                        className: "jsx-edeeb54b70e0343a" + " " + "btn-cancel",
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-edeeb54b70e0343a" + " " + "specs-list",
                        children: (filterCat ? [
                            filterCat
                        ] : catsWithSpecs).map((catId)=>{
                            const catSpecs = (groupedByCategory[catId] || []).sort((a, b)=>a.display_order - b.display_order);
                            if (catSpecs.length === 0 && !filterCat) return null;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-edeeb54b70e0343a" + " " + "cat-group",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "cat-group-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: getCategoryName(Number(catId))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "jsx-edeeb54b70e0343a" + " " + "spec-count",
                                                children: [
                                                    catSpecs.length,
                                                    " spec",
                                                    catSpecs.length !== 1 ? "s" : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>startAdd(Number(catId)),
                                                className: "jsx-edeeb54b70e0343a" + " " + "btn-add",
                                                children: "+ Add Spec"
                                            })
                                        ]
                                    }),
                                    catSpecs.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "spec-table",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "jsx-edeeb54b70e0343a",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-edeeb54b70e0343a",
                                                            children: "Label"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-edeeb54b70e0343a",
                                                            children: "Key"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-edeeb54b70e0343a",
                                                            children: "Order"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-edeeb54b70e0343a",
                                                            children: "Filterable"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-edeeb54b70e0343a",
                                                            children: "Actions"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                className: "jsx-edeeb54b70e0343a",
                                                children: catSpecs.map((spec)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "jsx-edeeb54b70e0343a",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-edeeb54b70e0343a" + " " + "td-label",
                                                                children: spec.spec_label
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-edeeb54b70e0343a" + " " + "td-key",
                                                                children: spec.spec_name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-edeeb54b70e0343a",
                                                                children: spec.display_order
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-edeeb54b70e0343a",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-edeeb54b70e0343a" + " " + `pill ${spec.is_filterable ? "yes" : "no"}`,
                                                                    children: spec.is_filterable ? "Yes" : "No"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "jsx-edeeb54b70e0343a" + " " + "td-actions",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        onClick: ()=>startEdit(spec),
                                                                        className: "jsx-edeeb54b70e0343a" + " " + "act-btn edit",
                                                                        children: "Edit"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        onClick: ()=>deleteSpec(spec.id),
                                                                        className: "jsx-edeeb54b70e0343a" + " " + "act-btn del",
                                                                        children: "Delete"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, spec.id))
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-edeeb54b70e0343a" + " " + "empty-cat",
                                        children: "No specs yet for this category."
                                    })
                                ]
                            }, catId);
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "edeeb54b70e0343a",
                children: ".specs-page.jsx-edeeb54b70e0343a{display:grid;gap:20px}.specs-header.jsx-edeeb54b70e0343a h1.jsx-edeeb54b70e0343a{margin:0;font-size:24px;color:#1f2937}.specs-header.jsx-edeeb54b70e0343a p.jsx-edeeb54b70e0343a{margin:4px 0 0;color:#6b7280;font-size:14px}.filter-row.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.filter-label.jsx-edeeb54b70e0343a{font-size:13px;font-weight:600;color:#374151}.filter-select.jsx-edeeb54b70e0343a{padding:10px 14px;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fafbff;font:inherit;font-size:14px;min-width:240px;cursor:pointer}.filter-select.jsx-edeeb54b70e0343a:focus{outline:none;border-color:#6366f1}.form-card.jsx-edeeb54b70e0343a{border:1px solid#e5e7eb;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff;padding:20px}.form-card.jsx-edeeb54b70e0343a h3.jsx-edeeb54b70e0343a{margin:0 0 14px;font-size:16px;color:#111827}.form-grid.jsx-edeeb54b70e0343a{display:grid;grid-template-columns:1fr 1fr 100px 100px;gap:12px}.form-field.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.form-field.jsx-edeeb54b70e0343a label.jsx-edeeb54b70e0343a{font-size:11px;font-weight:700;color:#374151;text-transform:uppercase}.form-field.jsx-edeeb54b70e0343a input.jsx-edeeb54b70e0343a,.form-field.jsx-edeeb54b70e0343a select.jsx-edeeb54b70e0343a{height:40px;border:2px solid#c7d2fe;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 12px;font:inherit;font-size:14px;background:#fafbff}.form-field.jsx-edeeb54b70e0343a input.jsx-edeeb54b70e0343a:focus,.form-field.jsx-edeeb54b70e0343a select.jsx-edeeb54b70e0343a:focus{outline:none;border-color:#6366f1}.form-actions.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-top:14px}.btn-save.jsx-edeeb54b70e0343a{border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:9px 18px;background:#4f46e5;color:#fff;font-weight:700;font-size:13px;cursor:pointer}.btn-save.jsx-edeeb54b70e0343a:disabled{opacity:.5}.btn-cancel.jsx-edeeb54b70e0343a{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:9px 18px;background:#fff;color:#374151;font-weight:600;font-size:13px;cursor:pointer}.specs-list.jsx-edeeb54b70e0343a{display:grid;gap:16px}.cat-group.jsx-edeeb54b70e0343a{border:1px solid#e5e7eb;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff;overflow:hidden}.cat-group-header.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:14px 18px;background:#f9fafb;border-bottom:1px solid#e5e7eb}.cat-group-header.jsx-edeeb54b70e0343a h3.jsx-edeeb54b70e0343a{margin:0;font-size:15px;color:#111827;font-weight:700}.spec-count.jsx-edeeb54b70e0343a{font-size:12px;color:#6b7280;background:#f3f4f6;padding:2px 10px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px}.btn-add.jsx-edeeb54b70e0343a{margin-left:auto;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:6px 14px;background:#4f46e5;color:#fff;font-size:12px;font-weight:700;cursor:pointer}.btn-add.jsx-edeeb54b70e0343a:hover{background:#4338ca}.spec-table.jsx-edeeb54b70e0343a{width:100%;border-collapse:collapse}.spec-table.jsx-edeeb54b70e0343a th.jsx-edeeb54b70e0343a{text-align:left;padding:10px 18px;font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280;font-weight:700;border-bottom:1px solid#f3f4f6}.spec-table.jsx-edeeb54b70e0343a td.jsx-edeeb54b70e0343a{padding:12px 18px;border-bottom:1px solid#f9fafb;font-size:14px;color:#374151}.spec-table.jsx-edeeb54b70e0343a tr.jsx-edeeb54b70e0343a:last-child td.jsx-edeeb54b70e0343a{border-bottom:none}.spec-table.jsx-edeeb54b70e0343a tr.jsx-edeeb54b70e0343a:hover{background:#fafbff}.td-label.jsx-edeeb54b70e0343a{font-weight:600;color:#111827}.td-key.jsx-edeeb54b70e0343a{font-family:monospace;font-size:13px;color:#6366f1}.td-actions.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px}.pill.jsx-edeeb54b70e0343a{padding:3px 8px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;font-size:11px;font-weight:700}.pill.yes.jsx-edeeb54b70e0343a{background:#d1fae5;color:#065f46}.pill.no.jsx-edeeb54b70e0343a{background:#f3f4f6;color:#6b7280}.act-btn.jsx-edeeb54b70e0343a{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:5px 10px;font-size:12px;font-weight:600;cursor:pointer}.act-btn.edit.jsx-edeeb54b70e0343a{border:1px solid#c7d2fe;background:#eef2ff;color:#4338ca}.act-btn.edit.jsx-edeeb54b70e0343a:hover{background:#e0e7ff}.act-btn.del.jsx-edeeb54b70e0343a{border:1px solid#fecaca;background:#fef2f2;color:#dc2626}.act-btn.del.jsx-edeeb54b70e0343a:hover{background:#fee2e2}.empty-cat.jsx-edeeb54b70e0343a{margin:0;padding:16px 18px;color:#9ca3af;font-size:14px}.empty-state.jsx-edeeb54b70e0343a{padding:40px;text-align:center;border:1px dashed#d1d5db;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px}.empty-state.jsx-edeeb54b70e0343a p.jsx-edeeb54b70e0343a{margin:0;color:#6b7280}.add-section.jsx-edeeb54b70e0343a{padding:20px;border:1px solid#e5e7eb;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fafbff}.add-section.jsx-edeeb54b70e0343a h4.jsx-edeeb54b70e0343a{margin:0 0 12px;font-size:14px;color:#374151}.add-cat-grid.jsx-edeeb54b70e0343a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px}.add-cat-btn.jsx-edeeb54b70e0343a{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:6px 14px;background:#fff;color:#374151;font-size:12px;font-weight:600;cursor:pointer}.add-cat-btn.jsx-edeeb54b70e0343a:hover{border-color:#6366f1;color:#4f46e5;background:#eef2ff}@media(max-width:768px){.form-grid.jsx-edeeb54b70e0343a{grid-template-columns:1fr}.filter-row.jsx-edeeb54b70e0343a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_5__.getDbPool)();
        const [specs] = await db.query("SELECT * FROM category_specs ORDER BY category_id ASC, display_order ASC");
        const [cats] = await db.query("SELECT id, name, parent_id FROM categories WHERE deleted_at IS NULL ORDER BY display_order ASC, name ASC");
        return {
            props: {
                specs: JSON.parse(JSON.stringify(specs)),
                categories: JSON.parse(JSON.stringify(cats))
            }
        };
    } catch (e) {
        return {
            props: {
                specs: [],
                categories: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySpecsPage);


/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(9968)));
module.exports = __webpack_exports__;

})();