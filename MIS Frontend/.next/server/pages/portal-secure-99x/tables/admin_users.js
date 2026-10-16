"use strict";
(() => {
var exports = {};
exports.id = 9641;
exports.ids = [9641,7174,2984];
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

/***/ 1230:
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






const ROLES = [
    {
        value: "super_admin",
        label: "Super Admin"
    },
    {
        value: "senior_admin",
        label: "Senior Admin"
    },
    {
        value: "junior_admin",
        label: "Junior Admin"
    }, 
];
const formatDate = (d)=>d ? new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }) : "—";
const AdminUsersPage = ({ users =[] , currentAdminId =null  })=>{
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(users);
    const { 0: showForm , 1: setShowForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        username: "",
        email: "",
        password: "",
        role: "junior_admin",
        profile_image: ""
    });
    const { 0: saving , 1: setSaving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const openAdd = ()=>{
        setEditing(null);
        setForm({
            name: "",
            username: "",
            email: "",
            password: "",
            role: "junior_admin",
            profile_image: ""
        });
        setShowForm(true);
        setError("");
    };
    const openEdit = (user)=>{
        setEditing(user.id);
        setForm({
            name: user.name,
            username: user.username || "",
            email: user.email,
            password: "",
            role: user.role,
            profile_image: user.profile_image || ""
        });
        setShowForm(true);
        setError("");
    };
    const closeForm = ()=>{
        setShowForm(false);
        setEditing(null);
        setError("");
    };
    const handleUpload = async (e)=>{
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
            if (data.url) setForm((p)=>Object.assign({}, p, {
                    profile_image: data.url
                }));
        } catch (err) {
            console.error(err);
        }
    };
    const handleSave = async ()=>{
        setSaving(true);
        setError("");
        // Password policy: min 10 chars, upper, lower, number, symbol
        if (form.password) {
            const pwd = form.password;
            if (pwd.length < 10) {
                setError("Password must be at least 10 characters.");
                setSaving(false);
                return;
            }
            if (!/[A-Z]/.test(pwd)) {
                setError("Password must contain an uppercase letter.");
                setSaving(false);
                return;
            }
            if (!/[a-z]/.test(pwd)) {
                setError("Password must contain a lowercase letter.");
                setSaving(false);
                return;
            }
            if (!/[0-9]/.test(pwd)) {
                setError("Password must contain a number.");
                setSaving(false);
                return;
            }
            if (!/[^A-Za-z0-9]/.test(pwd)) {
                setError("Password must contain a special character.");
                setSaving(false);
                return;
            }
        }
        try {
            if (editing) {
                // Update - don't send password if empty
                const values = {
                    name: form.name,
                    username: form.username,
                    email: form.email,
                    role: form.role,
                    profile_image: form.profile_image
                };
                if (form.password) values.password = form.password;
                const res = await fetch(`/api/admin/tables/admin_users/${editing}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        values
                    })
                });
                const data = await res.json();
                if (data.success) {
                    setItems((prev)=>prev.map((u)=>u.id === editing ? Object.assign({}, u, values) : u));
                    closeForm();
                } else {
                    setError(data.error || "Update failed");
                }
            } else {
                // Create
                if (!form.password) {
                    setError("Password is required for new admin");
                    setSaving(false);
                    return;
                }
                const values1 = {
                    name: form.name,
                    username: form.username,
                    email: form.email,
                    password: form.password,
                    role: form.role,
                    profile_image: form.profile_image
                };
                const res1 = await fetch("/api/admin/tables/admin_users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        values: values1
                    })
                });
                const data1 = await res1.json();
                if (data1.success) {
                    setItems((prev)=>[
                            ...prev,
                            Object.assign({}, values1, {
                                id: data1.insertedId,
                                created_at: new Date().toISOString()
                            })
                        ]);
                    closeForm();
                } else {
                    setError(data1.error || "Create failed");
                }
            }
        } catch (e) {
            setError("Network error");
        } finally{
            setSaving(false);
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("Delete this admin user?")) return;
        try {
            await fetch(`/api/admin/tables/admin_users/${id}`, {
                method: "DELETE"
            });
            setItems((prev)=>prev.filter((u)=>u.id !== id));
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-ed3adbfbfe0fa5ba",
                    children: "Admin Users | MIS Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-ed3adbfbfe0fa5ba" + " " + "admin-users-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "page-head",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-ed3adbfbfe0fa5ba",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-ed3adbfbfe0fa5ba",
                                        children: "Admin Users"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "jsx-ed3adbfbfe0fa5ba",
                                        children: [
                                            items.length,
                                            " admin",
                                            items.length !== 1 ? "s" : "",
                                            " registered"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: openAdd,
                                className: "jsx-ed3adbfbfe0fa5ba" + " " + "btn-add",
                                children: "+ Add Admin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "users-grid",
                        children: items.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-avatar",
                                        children: user.profile_image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: user.profile_image,
                                            alt: user.name,
                                            className: "jsx-ed3adbfbfe0fa5ba"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-ed3adbfbfe0fa5ba",
                                            children: (user.name || "A").charAt(0).toUpperCase()
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-info",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "jsx-ed3adbfbfe0fa5ba",
                                                children: user.name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-email",
                                                children: user.email
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-ed3adbfbfe0fa5ba" + " " + `role-badge role-${user.role}`,
                                                children: ROLES.find((r)=>r.value === user.role)?.label || user.role
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-meta",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "jsx-ed3adbfbfe0fa5ba",
                                                children: [
                                                    "Joined: ",
                                                    formatDate(user.created_at)
                                                ]
                                            }),
                                            user.last_login_ip && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "jsx-ed3adbfbfe0fa5ba",
                                                children: [
                                                    "Last IP: ",
                                                    user.last_login_ip
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "user-actions",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>openEdit(user),
                                                className: "jsx-ed3adbfbfe0fa5ba" + " " + "act-btn edit",
                                                children: "Edit"
                                            }),
                                            user.id !== currentAdminId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleDelete(user.id),
                                                className: "jsx-ed3adbfbfe0fa5ba" + " " + "act-btn del",
                                                children: "Delete"
                                            })
                                        ]
                                    })
                                ]
                            }, user.id))
                    }),
                    showForm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: closeForm,
                        className: "jsx-ed3adbfbfe0fa5ba" + " " + "modal-overlay",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: (e)=>e.stopPropagation(),
                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "modal-card",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "modal-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-ed3adbfbfe0fa5ba",
                                            children: editing ? "Edit Admin User" : "Add New Admin"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: closeForm,
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "close-x",
                                            children: "✕"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "modal-body",
                                    children: [
                                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-error",
                                            children: error
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "avatar-upload",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "avatar-preview",
                                                    children: form.profile_image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: form.profile_image,
                                                        alt: "Profile",
                                                        className: "jsx-ed3adbfbfe0fa5ba"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-ed3adbfbfe0fa5ba",
                                                        children: (form.name || "A").charAt(0).toUpperCase()
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "upload-btn",
                                                    children: [
                                                        "Upload Photo",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleUpload,
                                                            hidden: true,
                                                            className: "jsx-ed3adbfbfe0fa5ba"
                                                        })
                                                    ]
                                                }),
                                                form.profile_image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    onClick: ()=>setForm((p)=>Object.assign({}, p, {
                                                                profile_image: ""
                                                            })),
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "remove-btn",
                                                    children: "Remove"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-grid",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: "Full Name *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: {
                                                                width: "100%",
                                                                height: "48px",
                                                                padding: "0 14px",
                                                                border: "2px solid #c7d2fe",
                                                                borderRadius: "10px",
                                                                background: "#fafbff",
                                                                color: "#0f172a",
                                                                fontSize: "14px",
                                                                fontFamily: "inherit"
                                                            },
                                                            value: form.name,
                                                            onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                                        name: e.target.value
                                                                    })),
                                                            placeholder: "Enter full name",
                                                            required: true,
                                                            className: "jsx-ed3adbfbfe0fa5ba"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: "Username"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: {
                                                                width: "100%",
                                                                height: "48px",
                                                                padding: "0 14px",
                                                                border: "2px solid #c7d2fe",
                                                                borderRadius: "10px",
                                                                background: "#fafbff",
                                                                color: "#0f172a",
                                                                fontSize: "14px",
                                                                fontFamily: "inherit"
                                                            },
                                                            value: form.username,
                                                            onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                                        username: e.target.value
                                                                    })),
                                                            placeholder: "Optional username",
                                                            className: "jsx-ed3adbfbfe0fa5ba"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: "Email Address *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: {
                                                                width: "100%",
                                                                height: "48px",
                                                                padding: "0 14px",
                                                                border: "2px solid #c7d2fe",
                                                                borderRadius: "10px",
                                                                background: "#fafbff",
                                                                color: "#0f172a",
                                                                fontSize: "14px",
                                                                fontFamily: "inherit"
                                                            },
                                                            type: "email",
                                                            value: form.email,
                                                            onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                                        email: e.target.value
                                                                    })),
                                                            placeholder: "admin@company.com",
                                                            required: true,
                                                            className: "jsx-ed3adbfbfe0fa5ba"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-field",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: editing ? "New Password (leave blank to keep)" : "Password *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            style: {
                                                                width: "100%",
                                                                height: "48px",
                                                                padding: "0 14px",
                                                                border: "2px solid #c7d2fe",
                                                                borderRadius: "10px",
                                                                background: "#fafbff",
                                                                color: "#0f172a",
                                                                fontSize: "14px",
                                                                fontFamily: "inherit"
                                                            },
                                                            type: "password",
                                                            value: form.password,
                                                            onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                                        password: e.target.value
                                                                    })),
                                                            placeholder: editing ? "Leave blank to keep current" : "Min 8 characters",
                                                            className: "jsx-ed3adbfbfe0fa5ba"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "form-field full-width",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: "Role *"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                            style: {
                                                                width: "100%",
                                                                height: "48px",
                                                                padding: "0 14px",
                                                                border: "2px solid #c7d2fe",
                                                                borderRadius: "10px",
                                                                background: "#fafbff",
                                                                color: "#0f172a",
                                                                fontSize: "14px",
                                                                fontFamily: "inherit",
                                                                cursor: "pointer"
                                                            },
                                                            value: form.role,
                                                            onChange: (e)=>setForm((p)=>Object.assign({}, p, {
                                                                        role: e.target.value
                                                                    })),
                                                            className: "jsx-ed3adbfbfe0fa5ba",
                                                            children: ROLES.map((r)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: r.value,
                                                                    className: "jsx-ed3adbfbfe0fa5ba",
                                                                    children: r.label
                                                                }, r.value))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-ed3adbfbfe0fa5ba" + " " + "modal-footer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: closeForm,
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "btn-cancel",
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: handleSave,
                                            disabled: saving || !form.name || !form.email,
                                            className: "jsx-ed3adbfbfe0fa5ba" + " " + "btn-save",
                                            children: saving ? "Saving..." : editing ? "Save Changes" : "Create Admin"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ed3adbfbfe0fa5ba",
                children: ".admin-users-page.jsx-ed3adbfbfe0fa5ba{display:grid;gap:20px}.page-head.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.page-head.jsx-ed3adbfbfe0fa5ba h1.jsx-ed3adbfbfe0fa5ba{margin:0;font-size:24px;color:#1f2937}.page-head.jsx-ed3adbfbfe0fa5ba p.jsx-ed3adbfbfe0fa5ba{margin:4px 0 0;color:#6b7280;font-size:14px}.btn-add.jsx-ed3adbfbfe0fa5ba{border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:10px 20px;background:#4f46e5;color:#fff;font-weight:700;font-size:14px;cursor:pointer}.btn-add.jsx-ed3adbfbfe0fa5ba:hover{background:#4338ca}.users-grid.jsx-ed3adbfbfe0fa5ba{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}.user-card.jsx-ed3adbfbfe0fa5ba{border:1px solid#e5e7eb;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff;padding:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px;-webkit-transition:box-shadow.2s;-moz-transition:box-shadow.2s;-o-transition:box-shadow.2s;transition:box-shadow.2s}.user-card.jsx-ed3adbfbfe0fa5ba:hover{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.06);-moz-box-shadow:0 4px 16px rgba(0,0,0,.06);box-shadow:0 4px 16px rgba(0,0,0,.06)}.user-avatar.jsx-ed3adbfbfe0fa5ba{width:56px;height:56px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background:-webkit-linear-gradient(315deg,#667eea,#764ba2);background:-moz-linear-gradient(315deg,#667eea,#764ba2);background:-o-linear-gradient(315deg,#667eea,#764ba2);background:linear-gradient(135deg,#667eea,#764ba2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.user-avatar.jsx-ed3adbfbfe0fa5ba img.jsx-ed3adbfbfe0fa5ba{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.user-avatar.jsx-ed3adbfbfe0fa5ba span.jsx-ed3adbfbfe0fa5ba{color:#fff;font-size:22px;font-weight:800}.user-info.jsx-ed3adbfbfe0fa5ba strong.jsx-ed3adbfbfe0fa5ba{display:block;font-size:16px;color:#111827}.user-email.jsx-ed3adbfbfe0fa5ba{margin:2px 0 6px;font-size:13px;color:#6b7280}.role-badge.jsx-ed3adbfbfe0fa5ba{display:inline-block;padding:3px 10px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;font-size:11px;font-weight:700;text-transform:uppercase}.role-super_admin.jsx-ed3adbfbfe0fa5ba{background:#fef3c7;color:#92400e}.role-senior_admin.jsx-ed3adbfbfe0fa5ba{background:#dbeafe;color:#1e40af}.role-junior_admin.jsx-ed3adbfbfe0fa5ba{background:#f3f4f6;color:#374151}.user-meta.jsx-ed3adbfbfe0fa5ba{font-size:12px;color:#9ca3af;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px}.user-actions.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-top:auto}.act-btn.jsx-ed3adbfbfe0fa5ba{-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:600;cursor:pointer}.act-btn.edit.jsx-ed3adbfbfe0fa5ba{border:1px solid#c7d2fe;background:#eef2ff;color:#4338ca}.act-btn.edit.jsx-ed3adbfbfe0fa5ba:hover{background:#e0e7ff}.act-btn.del.jsx-ed3adbfbfe0fa5ba{border:1px solid#fecaca;background:#fef2f2;color:#dc2626}.act-btn.del.jsx-ed3adbfbfe0fa5ba:hover{background:#fee2e2}.modal-overlay.jsx-ed3adbfbfe0fa5ba{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:20px}.modal-card.jsx-ed3adbfbfe0fa5ba{width:100%;max-width:560px;background:#fff;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;-webkit-box-shadow:0 24px 48px rgba(0,0,0,.15);-moz-box-shadow:0 24px 48px rgba(0,0,0,.15);box-shadow:0 24px 48px rgba(0,0,0,.15);overflow:hidden}.modal-header.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 24px;border-bottom:1px solid#f1f5f9}.modal-header.jsx-ed3adbfbfe0fa5ba h2.jsx-ed3adbfbfe0fa5ba{margin:0;font-size:18px;color:#111827}.close-x.jsx-ed3adbfbfe0fa5ba{border:none;background:none;font-size:20px;cursor:pointer;color:#9ca3af}.modal-body.jsx-ed3adbfbfe0fa5ba{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;max-height:70vh;overflow-y:auto}.modal-footer.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;gap:10px;padding:16px 24px;border-top:1px solid#f1f5f9}.form-error.jsx-ed3adbfbfe0fa5ba{margin:0;padding:10px 14px;background:#fef2f2;border:1px solid#fecaca;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:#dc2626;font-size:13px;font-weight:600}.avatar-upload.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px}.avatar-preview.jsx-ed3adbfbfe0fa5ba{width:64px;height:64px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;background:-webkit-linear-gradient(315deg,#667eea,#764ba2);background:-moz-linear-gradient(315deg,#667eea,#764ba2);background:-o-linear-gradient(315deg,#667eea,#764ba2);background:linear-gradient(135deg,#667eea,#764ba2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.avatar-preview.jsx-ed3adbfbfe0fa5ba img.jsx-ed3adbfbfe0fa5ba{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar-preview.jsx-ed3adbfbfe0fa5ba span.jsx-ed3adbfbfe0fa5ba{color:#fff;font-size:26px;font-weight:800}.upload-btn.jsx-ed3adbfbfe0fa5ba{padding:8px 16px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;font-size:13px;font-weight:600;cursor:pointer}.upload-btn.jsx-ed3adbfbfe0fa5ba:hover{background:#f3f4f6}.remove-btn.jsx-ed3adbfbfe0fa5ba{border:none;background:none;color:#dc2626;font-size:12px;font-weight:600;cursor:pointer}.form-grid.jsx-ed3adbfbfe0fa5ba{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-field.jsx-ed3adbfbfe0fa5ba{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.form-field.full-width.jsx-ed3adbfbfe0fa5ba{grid-column:span 2}.form-field.jsx-ed3adbfbfe0fa5ba label.jsx-ed3adbfbfe0fa5ba{font-size:12px;font-weight:700;color:#374151}.btn-cancel.jsx-ed3adbfbfe0fa5ba{padding:10px 20px;border:1px solid#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fff;color:#374151;font-weight:600;cursor:pointer;font-size:14px}.btn-save.jsx-ed3adbfbfe0fa5ba{padding:10px 20px;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#4f46e5;color:#fff;font-weight:700;cursor:pointer;font-size:14px}.btn-save.jsx-ed3adbfbfe0fa5ba:disabled{opacity:.5}.btn-save.jsx-ed3adbfbfe0fa5ba:hover:not(:disabled){background:#4338ca}@media(max-width:640px){.form-grid.jsx-ed3adbfbfe0fa5ba{grid-template-columns:1fr}.form-field.full-width.jsx-ed3adbfbfe0fa5ba{grid-column:auto}.users-grid.jsx-ed3adbfbfe0fa5ba{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    try {
        const { verifyAdminSessionToken , ROLE_RESTRICTIONS  } = await __webpack_require__.e(/* import() */ 3164).then(__webpack_require__.bind(__webpack_require__, 3164));
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_5__.getDbPool)();
        // Check role access
        const cookieStr = req.headers?.cookie || "";
        const match = cookieStr.match(/mis_admin_session=([^;]+)/);
        let currentAdminId = null;
        let role = "junior_admin";
        if (match) {
            const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]));
            if (payload) {
                currentAdminId = Number(payload.sub);
                role = payload.role || "junior_admin";
            }
        }
        // Block access if role is restricted from admin_users
        const restrictions = ROLE_RESTRICTIONS[role] || [];
        if (restrictions.includes("admin_users")) {
            return {
                redirect: {
                    destination: "/portal-secure-99x",
                    permanent: false
                }
            };
        }
        const [rows] = await db.query("SELECT id, name, username, email, role, profile_image, last_login_ip, created_at FROM admin_users WHERE deleted_at IS NULL ORDER BY id ASC");
        return {
            props: {
                users: JSON.parse(JSON.stringify(rows)),
                currentAdminId
            }
        };
    } catch (e) {
        return {
            props: {
                users: [],
                currentAdminId: null
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminUsersPage);


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

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(1230)));
module.exports = __webpack_exports__;

})();