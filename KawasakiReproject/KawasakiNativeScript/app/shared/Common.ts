
export class Common {    
    
    spreadfasterNormalizer = (result:Array<any>):Array<any> => {
             var normalized = [];

			for (var i = 0; i < result.length; i++) {
				var entity = result[i];
				try {
					var caption = "";
					var name = "";
					var fullSizeUrl = "";
					var thumbUrl = "";
					var videoUrl = "";

					if (entity.network == "facebook") {
						caption = entity.name;
						name = entity.from.name;
						fullSizeUrl = entity.images[0].source;
						thumbUrl = entity.images[4].source;

						normalized.push({
							network: "facebook",
							caption: caption,
							user: name,
							imageUrl: fullSizeUrl,
							thumbUrl: thumbUrl
						});
					}
					else if (entity.network == "instagram") {

						if (entity.caption !== undefined) {
							if (entity.caption.text !== undefined) {
								caption = entity.caption.text;
								name = entity.caption.from.username;
							}
							else {
								caption = entity.caption;
								name = entity.owner.username;
							}
						}
						else {
							caption = entity.content.content_body;
							name = entity.author.name;
						}

						if (entity.images !== undefined) {
							fullSizeUrl = entity.images.standard_resolution.url;
							thumbUrl = entity.images.low_resolution.url;
						}
						else {
							if (entity.content !== undefined) {
								if (entity.content.content_picture !== undefined) {
									fullSizeUrl = entity.content.content_picture;
									thumbUrl = entity.content.content_picture;
								}
								else {
									fullSizeUrl = entity.content.content_video_thumbnail;
									thumbUrl = entity.content.content_video_thumbnail;
								}
							}
							else {
								fullSizeUrl = entity.display_src;
								thumbUrl = entity.display_src;
							}
						}

						if (entity.source !== undefined && (entity.source.source_url.indexOf('.mp4') > -1 || entity.source.source_url.indexOf('.mpg') > -1 || entity.source.source_url.indexOf('.mpeg') > -1)) {
							videoUrl = entity.source.source_url;
						}
						else {
							videoUrl = "";
						}

						normalized.push({
							network: "instagram",
							caption: caption,
							user: name,
							imageUrl: fullSizeUrl,
							thumbUrl: thumbUrl
						});
					}
					else if (entity.network == "twitter") {
						if (entity.retweeted_status)
							entity = entity.retweeted_status;

						caption = entity.text;
						name = entity.user.name;
						for (var t = 0; t < entity.entities.media.length; t++) {
							fullSizeUrl = entity.entities.media[t].media_url_https;
							thumbUrl = entity.entities.media[t].media_url_https + ":small";

							normalized.push({
								network: "twitter",
								caption: caption,
								user: name,
								imageUrl: fullSizeUrl,
								thumbUrl: thumbUrl
							});
						}
					}
				}
				catch (ex) {
					console.log(ex);
				}
			}

      return normalized;
    }

}