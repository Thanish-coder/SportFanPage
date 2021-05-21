AdView adView = new AdView(this);

adView.setAdSize(AdSize.BANNER);

adView.setAdUnitId("AdView adView = new AdView(this);

adView.setAdSize(AdSize.BANNER);

adView.setAdUnitId("ca-app-pub-3940256099942544/6300978111");
// TODO: Add adView to your view hierarchy");
// TODO: Add adView to your view hierarchy
package ...

import ...
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;

public class MainActivity extends AppCompatActivity {
    private AdView mAdView;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        MobileAds.initialize(this, new OnInitializationCompleteListener() {
            @Override
            public void onInitializationComplete(InitializationStatus initializationStatus) {
            }
        });

        mAdView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        mAdView.loadAd(adRequest);
    }
}
mAdView.setAdListener(new AdListener() {
    @Override
    public void onAdLoaded() {
        // Code to be executed when an ad finishes loading.
    }

    @Override
    public void onAdFailedToLoad(LoadAdError adError) {
        // Code to be executed when an ad request fails.
    }

    @Override
    public void onAdOpened() {
        // Code to be executed when an ad opens an overlay that
        // covers the screen.
    }

    @Override
    public void onAdClicked() {
        // Code to be executed when the user clicks on an ad.
    }

    @Override
    public void onAdClosed() {
        // Code to be executed when the user is about to return
        // to the app after tapping on an ad.
    }
});
AdSize adSize = new AdSize(300, 50);
