package com.example.weex.hackernews;

/**
 * Created by lukaijie on 2017/5/30.
 */


import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.utils.WXFileUtils;

public class WXPageActivity extends Activity implements IWXRenderListener {

    WXSDKInstance mWXSDKInstance;
    private Uri mUri;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main);


        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);

        mUri = getIntent().getData();
        String path = mUri.getScheme().equals("file") ? assembleFilePath(mUri) : mUri.toString();

        mWXSDKInstance.render(WXFileUtils.loadAsset(path, this));
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }

    public void onBackPressed(){
        Log.e("USER ACTION", "BACK");
        WXSDKManager.getInstance().fireEvent(mWXSDKInstance.getInstanceId(),"_root","androidback");
    }

    @Override
    protected void onResume() {
        super.onResume();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityDestroy();
        }
    }

    private String assembleFilePath(Uri uri) {
        if (uri != null && uri.getPath() != null) {
            return uri.getPath().replaceFirst("/", "");
        }
        return "";
    }
}
