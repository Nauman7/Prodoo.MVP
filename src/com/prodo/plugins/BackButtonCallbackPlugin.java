package com.prodo.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.sample.PhonegapFacebookTest.PhonegapFacebookTest;

import android.content.Intent;
import android.util.Log;

public class BackButtonCallbackPlugin extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {

		if (action.equals("executeBBCPlugin")) {
			try {
				
				JSONArray jArr = args;
				String json_string = jArr.toString();
				json_string.trim();
				JSONObject jObj = jArr.getJSONObject(0);
				
				boolean isMainView = (boolean) jObj.get("isMainView");
				
				
				if(isMainView){
					PhonegapFacebookTest.isMainView = true;
					
				}else {
					PhonegapFacebookTest.isMainView = false;
				}
				Intent broadcastintent = new Intent();
				broadcastintent.setAction("com.prodoo.app.CHECK_MAIN_VIEW");
				this.cordova.getActivity().sendBroadcast(broadcastintent);
			} catch (Exception ex) {
				Log.d(" -- BBC Plugin Exception -- ", ex.toString());
			}
			return true;
		} else
			return false;
	}
}
