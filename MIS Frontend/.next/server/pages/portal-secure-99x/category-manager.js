"use strict";
(() => {
var exports = {};
exports.id = 4544;
exports.ids = [4544,7174,2984];
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

/***/ 1755:
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






const CategoryManager = ({ categories =[]  })=>{
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(categories);
    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: adding , 1: setAdding  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null) // null or { parentId: null } or { parentId: 3 }
    ;
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        slug: "",
        status: "active"
    });
    const { 0: saving , 1: setSaving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const parents = items.filter((c)=>!c.parent_id);
    const getChildren = (parentId)=>items.filter((c)=>c.parent_id === parentId).sort((a, b)=>a.display_order - b.display_order);
    const toggleExpand = (id)=>setExpanded((p)=>({
                ...p,
                [id]: !p[id]
            }));
    const generateSlug = (name)=>name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const startAdd = (parentId)=>{
        setAdding({
            parentId
        });
        setEditing(null);
        setFormData({
            name: "",
            slug: "",
            status: "active",
            icon_url: ""
        });
    };
    const startEdit = (cat)=>{
        setEditing(cat.id);
        setAdding(null);
        setFormData({
            name: cat.name,
            slug: cat.slug,
            status: cat.status || "active",
            icon_url: cat.icon_url || ""
        });
    };
    const cancelForm = ()=>{
        setAdding(null);
        setEditing(null);
        setFormData({
            name: "",
            slug: "",
            status: "active",
            icon_url: ""
        });
    };
    const saveCategory = async ()=>{
        setSaving(true);
        const method = editing ? "PUT" : "POST";
        const body = {
            ...formData,
            parentId: adding?.parentId || null,
            id: editing || undefined
        };
        try {
            const res = await fetch("/api/admin/category-manage", {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                const data = await res.json();
                if (editing) {
                    setItems((prev)=>prev.map((c)=>c.id === editing ? {
                                ...c,
                                ...formData
                            } : c));
                } else {
                    setItems((prev)=>[
                            ...prev,
                            {
                                id: data.id,
                                parent_id: adding?.parentId || null,
                                ...formData,
                                display_order: 99
                            }
                        ]);
                }
                cancelForm();
            }
        } catch (e) {
            console.error(e);
        } finally{
            setSaving(false);
        }
    };
    const handleLogoUpload = async (e)=>{
        const file = e.target.files[0];
        if (!file) return;
        const fd = new FormData();
        fd.append("file", file);
        try {
            const res = await fetch("/api/admin/uploads", {
                method: "POST",
                body: fd
            });
            const data = await res.json();
            if (data.url) setFormData((p)=>({
                    ...p,
                    icon_url: data.url
                }));
        } catch (err) {
            console.error(err);
        }
    };
    const deleteCategory = async (id)=>{
        const children = getChildren(id);
        const msg = children.length > 0 ? `This category has ${children.length} subcategories. Delete all?` : "Delete this category?";
        if (!window.confirm(msg)) return;
        try {
            await fetch("/api/admin/category-manage", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id
                })
            });
            setItems((prev)=>prev.filter((c)=>c.id !== id && c.parent_id !== id));
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-8570823f06d53f28",
                    children: "Category Manager | Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-8570823f06d53f28" + " " + "cat-mgr",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-8570823f06d53f28" + " " + "mgr-header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8570823f06d53f28",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-8570823f06d53f28",
                                        children: "Category Manager"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "jsx-8570823f06d53f28",
                                        children: [
                                            parents.length,
                                            " main categories, ",
                                            items.length - parents.length,
                                            " subcategories"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>startAdd(null),
                                className: "jsx-8570823f06d53f28" + " " + "add-main-btn",
                                children: "+ Add Main Category"
                            })
                        ]
                    }),
                    (adding || editing) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-8570823f06d53f28" + " " + "form-card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "jsx-8570823f06d53f28",
                                children: editing ? "Edit Category" : adding?.parentId ? `Add Subcategory under "${parents.find((p)=>p.id === adding.parentId)?.name || "Parent"}"` : "Add Main Category"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8570823f06d53f28" + " " + "form-row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-8570823f06d53f28",
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                value: formData.name,
                                                onChange: (e)=>{
                                                    setFormData((p)=>({
                                                            ...p,
                                                            name: e.target.value,
                                                            slug: editing ? p.slug : generateSlug(e.target.value)
                                                        }));
                                                },
                                                placeholder: "Category name",
                                                className: "jsx-8570823f06d53f28"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-8570823f06d53f28",
                                                children: "Slug"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                value: formData.slug,
                                                onChange: (e)=>setFormData((p)=>({
                                                            ...p,
                                                            slug: e.target.value
                                                        })),
                                                placeholder: "url-slug",
                                                className: "jsx-8570823f06d53f28"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "form-field",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "jsx-8570823f06d53f28",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                value: formData.status,
                                                onChange: (e)=>setFormData((p)=>({
                                                            ...p,
                                                            status: e.target.value
                                                        })),
                                                className: "jsx-8570823f06d53f28",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "active",
                                                        className: "jsx-8570823f06d53f28",
                                                        children: "Active"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "inactive",
                                                        className: "jsx-8570823f06d53f28",
                                                        children: "Inactive"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !adding?.parentId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8570823f06d53f28" + " " + "logo-field",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "jsx-8570823f06d53f28",
                                        children: "Category Logo / Icon"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "logo-row",
                                        children: [
                                            formData.icon_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: formData.icon_url,
                                                alt: "Logo",
                                                className: "jsx-8570823f06d53f28" + " " + "logo-preview"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: formData.icon_url,
                                                onChange: (e)=>setFormData((p)=>({
                                                            ...p,
                                                            icon_url: e.target.value
                                                        })),
                                                placeholder: "Paste image URL or upload",
                                                className: "jsx-8570823f06d53f28" + " " + "logo-url-input"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "jsx-8570823f06d53f28" + " " + "upload-label",
                                                children: [
                                                    "Upload",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleLogoUpload,
                                                        hidden: true,
                                                        className: "jsx-8570823f06d53f28"
                                                    })
                                                ]
                                            }),
                                            formData.icon_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setFormData((p)=>({
                                                            ...p,
                                                            icon_url: ""
                                                        })),
                                                className: "jsx-8570823f06d53f28" + " " + "remove-logo",
                                                children: "✕"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8570823f06d53f28" + " " + "form-actions",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: saveCategory,
                                        disabled: saving || !formData.name,
                                        className: "jsx-8570823f06d53f28" + " " + "save-btn",
                                        children: saving ? "Saving..." : editing ? "Update" : "Create"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: cancelForm,
                                        className: "jsx-8570823f06d53f28" + " " + "cancel-btn",
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-8570823f06d53f28" + " " + "cat-tree",
                        children: parents.sort((a, b)=>a.display_order - b.display_order).map((parent)=>{
                            const children = getChildren(parent.id);
                            const isOpen = expanded[parent.id];
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8570823f06d53f28" + " " + "tree-parent",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "tree-row parent-row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>toggleExpand(parent.id),
                                                className: "jsx-8570823f06d53f28" + " " + "expand-btn",
                                                children: children.length > 0 ? isOpen ? "▼" : "▶" : "•"
                                            }),
                                            parent.icon_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: parent.icon_url,
                                                alt: "",
                                                className: "jsx-8570823f06d53f28" + " " + "tree-icon"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-8570823f06d53f28" + " " + "cat-name",
                                                children: parent.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "jsx-8570823f06d53f28" + " " + "cat-slug",
                                                children: [
                                                    "/",
                                                    parent.slug
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "jsx-8570823f06d53f28" + " " + "cat-count",
                                                children: [
                                                    children.length,
                                                    " sub"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-8570823f06d53f28" + " " + `status-dot ${parent.status === "active" ? "active" : "inactive"}`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-8570823f06d53f28" + " " + "row-actions",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>startAdd(parent.id),
                                                        className: "jsx-8570823f06d53f28" + " " + "action-sm",
                                                        children: "+ Sub"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>startEdit(parent),
                                                        className: "jsx-8570823f06d53f28" + " " + "action-sm",
                                                        children: "Edit"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>deleteCategory(parent.id),
                                                        className: "jsx-8570823f06d53f28" + " " + "action-sm danger",
                                                        children: "Delete"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    isOpen && children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-8570823f06d53f28" + " " + "tree-children",
                                        children: children.map((child)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-8570823f06d53f28" + " " + "tree-row child-row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-8570823f06d53f28" + " " + "child-indent",
                                                        children: "└"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-8570823f06d53f28" + " " + "cat-name",
                                                        children: child.name
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "jsx-8570823f06d53f28" + " " + "cat-slug",
                                                        children: [
                                                            "/",
                                                            child.slug
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-8570823f06d53f28" + " " + `status-dot ${child.status === "active" ? "active" : "inactive"}`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-8570823f06d53f28" + " " + "row-actions",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>startEdit(child),
                                                                className: "jsx-8570823f06d53f28" + " " + "action-sm",
                                                                children: "Edit"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>deleteCategory(child.id),
                                                                className: "jsx-8570823f06d53f28" + " " + "action-sm danger",
                                                                children: "Delete"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, child.id))
                                    })
                                ]
                            }, parent.id);
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8570823f06d53f28",
                children: ".cat-mgr.jsx-8570823f06d53f28{display:grid;gap:20px}.mgr-header.jsx-8570823f06d53f28{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px}.mgr-header.jsx-8570823f06d53f28 h1.jsx-8570823f06d53f28{margin:0;font-size:24px;color:#1f2937}.mgr-header.jsx-8570823f06d53f28 p.jsx-8570823f06d53f28{margin:4px 0 0;color:#6b7280;font-size:14px}.add-main-btn.jsx-8570823f06d53f28{border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:10px 18px;background:#4f46e5;color:#fff;font-size:14px;font-weight:700;cursor:pointer}.add-main-btn.jsx-8570823f06d53f28:hover{background:#4338ca}.form-card.jsx-8570823f06d53f28{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;padding:20px}.form-card.jsx-8570823f06d53f28 h3.jsx-8570823f06d53f28{margin:0 0 14px;font-size:16px;color:#111827}.form-row.jsx-8570823f06d53f28{display:grid;grid-template-columns:1fr 1fr auto;gap:12px}.form-field.jsx-8570823f06d53f28{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.form-field.jsx-8570823f06d53f28 label.jsx-8570823f06d53f28{font-size:12px;font-weight:600;color:#374151}.form-field.jsx-8570823f06d53f28 input.jsx-8570823f06d53f28,.form-field.jsx-8570823f06d53f28 select.jsx-8570823f06d53f28{height:38px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 12px;font:inherit;font-size:14px}.form-field.jsx-8570823f06d53f28 input.jsx-8570823f06d53f28:focus,.form-field.jsx-8570823f06d53f28 select.jsx-8570823f06d53f28:focus{outline:none;border-color:#4f46e5}.form-actions.jsx-8570823f06d53f28{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-top:14px}.logo-field.jsx-8570823f06d53f28{margin-top:12px}.logo-field.jsx-8570823f06d53f28>label.jsx-8570823f06d53f28{display:block;font-size:12px;font-weight:600;color:#374151;margin-bottom:6px}.logo-row.jsx-8570823f06d53f28{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.logo-preview.jsx-8570823f06d53f28{width:40px;height:40px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-o-object-fit:contain;object-fit:contain;border:1px solid#e5e7eb;background:#f9fafb}.logo-url-input.jsx-8570823f06d53f28{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:38px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 12px;font-size:13px}.logo-url-input.jsx-8570823f06d53f28:focus{outline:none;border-color:#4f46e5}.upload-label.jsx-8570823f06d53f28{padding:8px 14px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap}.upload-label.jsx-8570823f06d53f28:hover{background:#f3f4f6}.remove-logo.jsx-8570823f06d53f28{border:none;background:transparent;color:#dc2626;font-size:16px;cursor:pointer;padding:4px}.tree-icon.jsx-8570823f06d53f28{width:28px;height:28px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-o-object-fit:contain;object-fit:contain;border:1px solid#e5e7eb;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.save-btn.jsx-8570823f06d53f28{border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 18px;background:#4f46e5;color:#fff;font-weight:700;font-size:13px;cursor:pointer}.save-btn.jsx-8570823f06d53f28:disabled{opacity:.5}.cancel-btn.jsx-8570823f06d53f28{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 18px;background:#fff;color:#374151;font-weight:600;font-size:13px;cursor:pointer}.cat-tree.jsx-8570823f06d53f28{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;overflow:hidden}.tree-parent.jsx-8570823f06d53f28{border-bottom:1px solid#f3f4f6}.tree-parent.jsx-8570823f06d53f28:last-child{border-bottom:none}.tree-row.jsx-8570823f06d53f28{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;padding:12px 16px}.parent-row.jsx-8570823f06d53f28{background:#f9fafb}.parent-row.jsx-8570823f06d53f28:hover{background:#f3f4f6}.child-row.jsx-8570823f06d53f28{padding-left:40px}.child-row.jsx-8570823f06d53f28:hover{background:#fafbfe}.expand-btn.jsx-8570823f06d53f28{border:none;background:transparent;cursor:pointer;font-size:12px;color:#6b7280;width:20px}.child-indent.jsx-8570823f06d53f28{color:#d1d5db;font-size:14px;width:20px}.cat-name.jsx-8570823f06d53f28{font-size:14px;font-weight:600;color:#111827}.cat-slug.jsx-8570823f06d53f28{font-size:12px;color:#9ca3af}.cat-count.jsx-8570823f06d53f28{font-size:11px;color:#6b7280;background:#f3f4f6;padding:2px 8px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.status-dot.jsx-8570823f06d53f28{width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.status-dot.active.jsx-8570823f06d53f28{background:#10b981}.status-dot.inactive.jsx-8570823f06d53f28{background:#ef4444}.row-actions.jsx-8570823f06d53f28{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px}.action-sm.jsx-8570823f06d53f28{border:1px solid#e5e7eb;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:4px 10px;background:#fff;font-size:11px;font-weight:600;cursor:pointer;color:#374151}.action-sm.jsx-8570823f06d53f28:hover{background:#f3f4f6}.action-sm.danger.jsx-8570823f06d53f28{color:#dc2626;border-color:#fecaca}.action-sm.danger.jsx-8570823f06d53f28:hover{background:#fef2f2}@media(max-width:768px){.form-row.jsx-8570823f06d53f28{grid-template-columns:1fr}.tree-row.jsx-8570823f06d53f28{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.row-actions.jsx-8570823f06d53f28{width:100%;margin-top:6px;margin-left:30px}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_5__.getDbPool)();
        const [rows] = await db.query("SELECT id, parent_id, name, slug, icon_url, status, display_order FROM categories WHERE deleted_at IS NULL ORDER BY display_order ASC, name ASC");
        return {
            props: {
                categories: JSON.parse(JSON.stringify(rows))
            }
        };
    } catch (e) {
        return {
            props: {
                categories: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryManager);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(1755)));
module.exports = __webpack_exports__;

})();