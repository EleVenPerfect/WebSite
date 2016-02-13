<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="en">
<head>

<title>Contacts</title>
<link rel="stylesheet" href="<?php echo base_url()?>css/contact-form.css">

<?php $this->load->view('atime/head.php') ?>



  <div class="container">
    <div class="row">
      <!-- <div class="grid_12">
        <h2>Contacts</h2>
        <div class="map">
          <figure class="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24214.807650104907!2d-73.94846048422478!3d40.65521573400813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1395650655094" style="border:0"></iframe>
          </figure>
        </div>
      </div> -->
      <div class="grid_5">
        <h2>Contact Info</h2>
        <div class="text1 tx__1">
        231321312
        </div>
      </div>
      <div class="grid_6 preffix_1">
        <h2>Contact  Form</h2>
              <form id="contact-form">
                  <div class="contact-form-loader"></div>
                  <fieldset>
                    <label class="name">
                      <input type="text" name="name" placeholder="Name:" value="" data-constraints="@Required @JustLetters"  />
                      <span class="empty-message">*This field is required.</span>
                      <span class="error-message">*This is not a valid name.</span>
                    </label>
                   
                    <label class="email">
                      <input type="text" name="email" placeholder="E-mail:" value="" data-constraints="@Required @Email" />
                      <span class="empty-message">*This field is required.</span>
                      <span class="error-message">*This is not a valid email.</span>
                    </label>

                    <label class="phone">
                      <input type="text" name="phone" placeholder="Phone:" value="" data-constraints="@Required @JustNumbers" />
                      <span class="empty-message">*This field is required.</span>
                      <span class="error-message">*This is not a valid phone.</span>
                    </label>
                   
                    <label class="message">
                      <textarea name="message" placeholder="Message:" data-constraints='@Required @Length(min=20,max=999999)'></textarea>
                      <span class="empty-message">*This field is required.</span>
                      <span class="error-message">*The message is too short.</span>
                    </label>

                    <div class="ta__right">
                      <a href="#" class="btn" data-type="reset">clear</a>
                      <a href="#" class="btn" data-type="submit">send</a>
                    </div>
                  </fieldset> 
                  
                  <div class="modal fade response-message">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 class="modal-title">Modal title</h4>
                        </div>
                        <div class="modal-body">
                          You message has been sent! We will be in touch soon.
                        </div>      
                      </div>
                    </div>
                  </div>
                </form>   
      </div>
    </div>
  </div>
  
  
  <?php $this->load->view('atime/foot.php') ?>