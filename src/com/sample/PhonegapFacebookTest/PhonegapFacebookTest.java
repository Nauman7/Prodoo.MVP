/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.sample.PhonegapFacebookTest;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.IntentFilter;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import org.apache.cordova.*;

import com.facebook.internal.Logger;

import android.content.Intent;
import code.prodoo.keyboard.KeyboardUtil;
import code.prodoo.keyboard.KeyboardVisibilityListener;

public class PhonegapFacebookTest extends CordovaActivity
{
	private String TAG = null;
	public static Context ctx = null;
	public static boolean isMainView = false; 
	private BroadcastReceiver mainViewReceiver = null;
	private IntentFilter MainViewIntentFilter = null;
	KeyboardVisibilityListener mKeyboardVisibilityListener = null;
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
    	ctx=this;
    	
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.setIntegerProperty("loadUrlTimeoutValue", 70000);
        //super.loadUrl("file:///android_asset/www/index.html");
        super.loadUrl(Config.getStartUrl());
        
        mKeyboardVisibilityListener = new KeyboardVisibilityListener() {
			
			@Override
			public void onKeyboardVisibilityChanged(boolean keyboardVisible) {
				Toast.makeText(ctx,""+keyboardVisible, Toast.LENGTH_SHORT).show();
			}
		};
        KeyboardUtil.setKeyboardVisibilityListener(this, mKeyboardVisibilityListener);
        
    }
    
    private void onBack(){
		moveTaskToBack(true);
	}
    /*
    
    @Override
	public void onBackPressed() {
    //boolean isExit= sendJavascript("javascript:G.GoBackScreen();");
    //if(isExit)
    // super.onBackPressed();
    
    sendJavascript("javascript:G.GoBackScreen();");
	}
    */
	@Override
	protected void onStop()
	{
		String TAG = " Class > PhonegapFacebookTest :: Method > onStop";
		
		try{
			super.onStop();
			unregisterReceiver(mainViewReceiver);
		}catch(Exception ex){
			Log.v(TAG, ex.toString());
		}finally{
			TAG = "";
		}
	}
    
	@SuppressWarnings("deprecation")
	@Override
	public void onBackPressed(){
		TAG = " Class > PhonegapFacebookTest :: Method > onBackPressed";
		
		try{
			sendJavascript("javascript:G.GoBackScreen();");
			MainViewIntentFilter = new IntentFilter("com.prodoo.app.CHECK_MAIN_VIEW");
			mainViewReceiver = new BroadcastReceiver() {
	            
				@Override
				public void onReceive(Context context, Intent intent) {
					
					String TAG = " Class > PhonegapFacebookTest :: Method > mReceiver - onReceive";
					
					try{
						
						if(isMainView){
							((PhonegapFacebookTest) ctx).onBack();
						}
						
						
					}catch(Exception ex){
						Log.v(TAG, ex.toString());
					}finally{
						TAG = "";
					}
				}
	        };
	        
	        registerReceiver(mainViewReceiver, MainViewIntentFilter);
	        
		}catch(Exception ex){
		//	Logger.v(TAG, ex);
		}
	}
}

