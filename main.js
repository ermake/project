
import bridge from "@vkontakte/vk-bridge";


// Init VK  Mini App
bridge.send("VKWebAppInit");

function js() {
bridge.send("VKWebAppShowNativeAds", {ad_format:"preloader"})
.then(data => console.log(data.result))
.catch(error => console.log(error));
	
}