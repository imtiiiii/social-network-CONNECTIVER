<template>
	<div>
		<template v-if="isHide">
			<div class="_statusBox_shimmer _mar_b20">
				<div class="_statusBox_shimmer_pic _shim_animate"></div>
				<div class="_statusBox_shimmer_details">
					<div class="_statusBox_shimmer_input _shim_animate"></div>
				</div>
			</div>
		</template>
		<!-- Shimmer -->
		<template v-if="isloaded">
			<div
				:class="
					isStatusbox
						? '_statusBox_open _statusBox _mar_b20'
						: '_statusBox _mar_b20'
				"
			>
				<div class="_statusBox_top">
					<div class="_statusBox_top_pic">
						<img
							src="../static/img/male.jpg"
							alt=""
							title=""
							class="_statusBox_top_img"
						/>
					</div>
					<div class="_statusBox_input" @click="isStatusbox = true">
						<input type="text" placeholder="Create a new post..." />
					</div>
				</div>
				<div class="_statusBox_bottom">
					<ul class="_statusBox_bottom_ul">
						<li @click="isStatusbox = true">
							<i class="fas fa-images"></i> Photo
						</li>
						<li @click="isStatusbox = true">
							<i class="fas fa-video"></i> Video
						</li>
					</ul>
				</div>
				<div class="_statusBox_main_all">
					<div class="_statusBox_main _padd">
						<p
							class="_statusBox_close"
							@click="isStatusbox = false"
						>
							<Icon type="md-close" />
						</p>
						<div class="_statusBox_main_top">
							<div class="_statusBox_main_pic">
								<img
									src="../static/img/male.jpg"
									alt=""
									title=""
									class="_statusBox_main_img _1border_color"
								/>
							</div>
							<!-- ***********STATUS BOX MAIN ******************* -->

							<div class="_statusBox_main_details">
								<p class="_statusBox_main_name">
									<!-- ********USER NAME****** -->
									<a href="" class="_3link">{{
										user.first_name + " " + user.last_name
									}}</a>
								</p>
								<div class="_statusBox_main_drop">
									<Dropdown
										trigger="click"
										placement="bottom-start"
									>
										<a
											href="javascript:void(0)"
											class="_statusBox_main_text"
										>
											Public
											<i
												class="
													ivu-icon
													ivu-icon-ios-arrow-down
												"
											></i>
										</a>
										<!-- *********DROP DOWN FOR PRIVACY SETTINGS*********** -->
										<DropdownMenu slot="list">
											<DropdownItem
												><p>Public</p></DropdownItem
											>
											<DropdownItem
												><p>Only Me</p></DropdownItem
											>
											<DropdownItem
												><p>
													Only Friend
												</p></DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
							</div>
						</div>

						<!-- ************CAPTION AREA*********** -->
						<div class="_statusBox_textarea">
							<textarea
								type="text"
								v-bind:placeholder="
									'whats on your mind ' + user.first_name
								"
								class="_statusBox_textarea_text"
								v-model="caption"
							></textarea>
						</div>
						<!-- **********CHOOSE PICTURE FROM YOUR FILES*************** -->
						<!-- IT WILL ONLY BE SHOWN WHEN THE USER CHOOSES TO UPLAOD A PICTURE -->

						<div v-if="pictureUpload">
							<VueFileAgent
								:helpText="'Choose images'"
								v-model="photos"
								:multiple="true"
							></VueFileAgent>
						</div>
						<!-- <div class="_statusBox_video">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button icon="ios-cloud-upload-outline">Photo / Video</Button>
                            </Upload>
                        </div> -->
						<div class="_statusBox_options">
							<div class="row">
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-camera-retro"></i>
										</div>

										<p
											class="_statusBox_options_text"
											v-on:click="uploadPhotos"
										>
											Upload Photossssssssss
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-folder-open"></i>
										</div>

										<p class="_statusBox_options_text">
											Create Album
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-smile"></i>
										</div>

										<p class="_statusBox_options_text">
											Feeling/Activity
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-palette"></i>
										</div>

										<p class="_statusBox_options_text">
											Colored Background
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i
												class="fas fa-microphone-alt"
											></i>
										</div>

										<p class="_statusBox_options_text">
											Voice Notes
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-image"></i>
										</div>

										<p class="_statusBox_options_text">
											GIF
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-poll"></i>
										</div>

										<p class="_statusBox_options_text">
											Create Poll
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-video"></i>
										</div>

										<p class="_statusBox_options_text">
											Upload Video
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-music"></i>
										</div>

										<p class="_statusBox_options_text">
											Upload Audio
										</p>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									<div class="_statusBox_options_items">
										<div class="_statusBox_options_icon">
											<i class="fas fa-folder-open"></i>
										</div>

										<p class="_statusBox_options_text">
											Upload Fileeee
										</p>
									</div>
								</div>
							</div>
						</div>

						<div v-on:click="share" class="_statusBox_main_bottom">
							<button
								type="button"
								class="
									ivu-btn
									ivu-btn-primary
									ivu-btn-long
									ivu-btn-large
								"
							>
								<span> Share</span>
							</button>
						</div>
					</div>
					<div
						@click="isStatusbox = false"
						class="_statusBox_overlay"
					></div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import Vue from "vue";
import VueFileAgent from "vue-file-agent";
import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";
Vue.use(VueFileAgent);
export default {
	data() {
		return {
			isStatusbox: false,
			isloaded: false,
			isHide: true,
			user: null,
			caption: "",
			pictureUpload: false,
			photos: [],
		};
	},

	methods: {
		async share() {
			// const img = this.photosfile;
			// it will store all photos(file) to be uploaded at oncee
			const allPhotos = [];
			for (let img of this.photos) {
				// ********STORING FILES TO SEND AS FORM DATA ****
				allPhotos.push(img.file);
			}
			// *********CREATING A FORM DATA OBJECT TO SEND FILES TO BACKEND*********
			const data = new FormData();
			// STORING ALL PHOTOS IN THE FORM DATA WITH LOOP BECAUSE ITS MULTIPLE FILE
			for (let img of allPhotos) {
				data.append("img", img);
			}
			// *********STORING CAPTION AND USER ID IN FORM DATA ********
			data.append("caption", this.caption);
			data.append("user_id", this.user.id);

			const res = await this.callApi("post", "/posts/share", data);
			if (res.status === 200) {
				this.caption = "";
				this.photos = [];
				this.pictureUpload = false;
			}
		},
		uploadPhotos() {
			this.pictureUpload = true;
		},
	},

	created() {
		this.user = this.authUser;
		var self = this;
		var self2 = this;
		setTimeout(function () {
			self.$nextTick(function () {
				self.isloaded = true;
			});
			self2.$nextTick(function () {
				self2.isHide = false;
			});
		}, 1500);
	},
};
</script>