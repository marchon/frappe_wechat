// Copyright (c) 2017, Dirk Chang and contributors
// For license information, please see license.txt

frappe.ui.form.on('Wechat Send Doc', {
	setup: function(frm) {
		/* frm.fields_dict["document_type"].get_query = function(){
			return {
				filters: {
					"name": ["in","IOT Device Error,Ticket Task,ToDo,User"]
				}
			}
		}; */
		frm.fields_dict["document_id"].get_query = function(){
			if (frm.fields_dict["document_type"].value === "User") {
				return {
					filters: {"ignore_user_type": 1}
				};
			} else {
				return {};
			}
		};
	},
	refresh: function(frm) {
		if(frm.doc.docstatus == 1) {
			frm.add_custom_button(__("Resend"), function() {
				 me.frm.amend_doc();
			});
		}
	}
});
